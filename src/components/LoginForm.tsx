import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { userLoginInput } from '../schema/user.schema'
import { trpc } from '../utils/trpc'

const VerifyToken = ({ hash }: { hash: string }) => {
  const router = useRouter()
  const { data, isLoading } = trpc.user['verify-otp'].useQuery(
    {
      hash,
    },
  )

  if (isLoading) {
    return <p>Verifying...</p>
  }

  router.push(data?.redirect.includes('login') ? '/' : data?.redirect || '/')

  return <p>Redirecting...</p>
}

function LoginForm() {
  const { handleSubmit, register } = useForm<userLoginInput>()
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  const { mutate, error } = trpc.user.login.useMutation({
    onSuccess: (token) => {
      router.push(`${router.asPath}#token=${token}`);
    },
  })

  function onSubmit(values: userLoginInput) {
    mutate(values)
  }

  const hash = router.asPath.split('#token=')[1]

  if (hash && hash.length > 0) {
    return <VerifyToken hash={hash} />
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {error && error.message}

        {success && <p>Check your email</p>}
        <h1>Login</h1>

        <input
          type="email"
          placeholder="jane.doe@example.com"
          {...register('email')}
        />
        <input
          type="password"
          {...register('password')}
        />
        <button>Login</button>
      </form>

      <Link href="/register">Register</Link>
    </>
  )
}

export default LoginForm
