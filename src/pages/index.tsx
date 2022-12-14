import type { NextPage } from "next";
import Link from "next/link";
import { AuthorisedOnlyProvider } from "../providers/authProider/AuthProvider";
import AuthorisedOnly from "./AuthorisedOnly";
import PublicArea from "./public";
import { Context, createContext as ServerContext } from "../server/context";
import Layout from "../layout/Layout";

const Home = () => {
  // return (
  //   <>
  //     <div>This is index page</div>
  //     <div>
  //       <Link href="/all">see all todos here!</Link>
  //       <PublicArea />
  //       <AuthorisedOnlyProvider>
  //         <AuthorisedOnly />
  //       </AuthorisedOnlyProvider>
  //     </div>
  //   </>
  // );
  return (
    <Layout>
      <PublicArea />
      <AuthorisedOnlyProvider>
        <AuthorisedOnly />
      </AuthorisedOnlyProvider>
    </Layout>
  );
};

export default Home;
