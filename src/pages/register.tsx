import { useForm } from "react-hook-form";
import { CreateUserInput } from "../schema/user.schema";
import { useRouter } from "next/router";
import { trpc } from '../utils/trpc';
import Link from "next/link";

const RegisterPage = () => {
  const { handleSubmit, register } = useForm<CreateUserInput>();
  const router = useRouter();

  const { mutate, error } = trpc.user.register.useMutation({
    onSuccess: () => {
      router.push('/login')
    },
  })

  function onSubmit(values: CreateUserInput) {
    mutate(values)
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {error && error.message}
        <h1>Register</h1>

        <input
          type="email"
          placeholder="jane.doe@example.com"
          {...register('email')}
        />
        <br />
        <input type="text" placeholder="Tom" {...register('name')} />
        <button type="submit">Register</button>
      </form>

      <Link href="/login">Login</Link>
    </>
  )
};

export default RegisterPage;
