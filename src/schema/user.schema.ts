import z from 'zod'

export const verifyTokenSchema = z.object({
  token: z.string()
})
export type VerifyTokenInput = z.TypeOf<typeof verifyTokenSchema>


export const createUserSchema = z.object({
  name: z.string(),
  password: z.string().min(6).max(12),
  confirmPassword: z.string().min(6).max(12),
  email: z.string().email(),
  verifyLinkUrl: z.string()
})

export const createUserOutputSchema = z.object({
  name: z.string(),
  email: z.string().email(),
})

export type CreateUserInput = z.TypeOf<typeof createUserSchema>


export const userLoginSchema = z.object({
  email: z.string(),
  password: z.string().min(6).max(12)
})
export type userLoginInput = z.TypeOf<typeof userLoginSchema>


export const requestOtpSchema = z.object({
  email: z.string().email(),
  redirect: z.string().default('/'),
})

export type requestOtpInput = z.TypeOf<typeof requestOtpSchema>

export const verifyOtpSchema = z.object({
  hash: z.string(),
})
