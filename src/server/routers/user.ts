import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { z } from 'zod';
import { createUserSchema, requestOtpSchema, verifyOtpSchema } from '../../schema/user.schema';
import * as trpc from '@trpc/server'
import { baseProcedure, router } from '../trpc';
import { sendLoginEmail } from '../../utils/mailer';
import { decode, encode } from '../../utils/base64';
import { baseUrl } from '../../../constants';
import { signJwt } from '../../utils/jwt';
import { serialize } from 'cookie'

export const userRouter = router({
  me: baseProcedure.query(({ctx}) => {
    return ctx.currUser;
  }),
  all: baseProcedure.query(({ ctx }) => {
    return ctx.user.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });
  }),
  register: baseProcedure.input(createUserSchema).mutation(async({ctx, input}) => {
    try{
      const user = await ctx.user.create({data: {
        email: input.email,
        name: input.name
      }});
      return user;
    }catch(e) {
      if (e instanceof PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new trpc.TRPCError({
            code: 'CONFLICT',
            message: 'User already exists',
          })
        }
      }

      throw new trpc.TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Something went wrong',
      })
    }
  }),
  'request-otp' : baseProcedure.input(requestOtpSchema).mutation(async({ctx, input}) => {
    const { email, redirect } = input

      const user = await ctx.prisma.user.findUnique({
        where: {
          email,
        },
      })

      if (!user) {
        throw new trpc.TRPCError({
          code: 'NOT_FOUND',
          message: 'User not found',
        })
      }

      const token = await ctx.prisma.loginToken.create({
        data: {
          redirect,
          user: {
            connect: {
              id: user.id,
            },
          },
        },
      });

      // send email to user
      sendLoginEmail({
        token: encode(`${token.id}:${user.email}`),
        url: baseUrl,
        email: user.email,
      })

      return true
  }),
  'verify-otp': baseProcedure.input(verifyOtpSchema).query(async({ctx, input}) => {
    const decoded = decode(input.hash).split(':')

    const [id, email] = decoded

    const token = await ctx.prisma.loginToken.findFirst({
      where: {
        id,
        user: {
          email,
        },
      },
      include: {
        user: true,
      },
    })

    if (!token) {
      throw new trpc.TRPCError({
        code: 'FORBIDDEN',
        message: 'Invalid token',
      })
    }

    const jwt = signJwt({
      email: token.user.email,
      id: token.user.id,
    })

    ctx.res?.setHeader('Set-Cookie', serialize('token', jwt, { path: '/' }))

    return {
      redirect: token.redirect,
    }
  }),
});
