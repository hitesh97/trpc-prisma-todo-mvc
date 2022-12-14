import { useForm } from "react-hook-form";
import { CreateUserInput } from "../../schema/user.schema";
import { useRouter } from "next/router";
import { trpc } from '../../utils/trpc';
import Link from "next/link";

import dynamic from "next/dynamic";
import Layout from "../../layout/Layout";

const RegisterPage2 = () => {
  const { handleSubmit, register } = useForm<CreateUserInput>();
  const router = useRouter();

  const { mutate, error } = trpc.user.register.useMutation({
    onSuccess: () => {
      router.push('/checkmail')
    },
  })

  function onSubmit(values: CreateUserInput) {
    mutate({...values, verifyLinkUrl:"/login"})
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
        <input type="password" {...register('password')} />
        <input type="password" {...register('confirmPassword')} />
        <input type="text" {...register('profileUrl')} />
        <button type="submit">Register</button>
      </form>

      <Link href="/login">Login</Link>
    </>
  )
};




const LoginForm = dynamic(() => import("../../components/LoginForm"), {
  ssr: false,
});

function RegisterPage() {
  return (
    <Layout>
      <LoginForm logintype="register" />
    </Layout>
  );
}


export default RegisterPage;
