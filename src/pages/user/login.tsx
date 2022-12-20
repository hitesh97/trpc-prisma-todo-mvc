import dynamic from "next/dynamic";
import Layout from "../../layout/Layout";

const LoginForm = dynamic(() => import("../../components/LoginForm"), {
  ssr: false,
});

function LoginPage() {
  return (
    <Layout>
      <LoginForm logintype="login" />
    </Layout>
  );
}

export default LoginPage;
