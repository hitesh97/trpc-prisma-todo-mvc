import { useForm } from "react-hook-form";
import { VerifyTokenInput } from "../schema/user.schema";
import { useRouter } from "next/router";

function CheckEmailPage() {
  const { handleSubmit, register } = useForm<VerifyTokenInput>();
  const router = useRouter();
  const onSubmit = (values: VerifyTokenInput) => {
    router.push(`/login#token=${values.token}`)
  }
  return (
    <div>
      We have sent you a link with unique token.
      <br />
      Please click on the link to verify your email address.
      <br />
      Or Paste the code here to verify manually.
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type="text" placeholder="token" {...register('token')}/>
        <button type="submit">Verify</button>
      </form>
    </div>
  );
}

export default CheckEmailPage;
