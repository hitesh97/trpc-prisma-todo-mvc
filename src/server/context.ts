import { NextApiRequest, NextApiResponse } from 'next'
import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { prisma } from '../utils/prisma';
import { verifyJwt } from '../utils/jwt'

interface CtxUser {
  id: string
  email: string
  name: string

}

function getUserFromRequest(req: NextApiRequest | undefined) {
  if(!req) return null;

  const token = req.cookies.token

  if (token) {
    try {
      const verified = verifyJwt<CtxUser>(token)
      return verified
    } catch (e) {
      return null
    }
  }

  return null
}

// create context based of incoming request
// set as optional here so it can also be re-used for `getStaticProps()`
export const createContext = async (
  opts?: trpcNext.CreateNextContextOptions,
) => {
  const user = getUserFromRequest(opts?.req);
  return {
    req: opts?.req,
    res: opts?.res,
    prisma,
    task: prisma.task,
    user: prisma.user,
    currUser: user
  };
};
export type Context = trpc.inferAsyncReturnType<typeof createContext>;
