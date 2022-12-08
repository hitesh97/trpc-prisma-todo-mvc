import type { NextPage } from "next";
import Link from "next/link";
import { AuthorisedOnlyProvider } from "../providers/authProider/AuthProvider";
import AuthorisedOnly from "./AuthorisedOnly";
import PublicArea from "./public";
import { Context, createContext as ServerContext } from '../server/context';


const Home = () => {
  return (
    <>
      <div>This is index page</div>
      <div>
        <Link href="/all">see all todos here!</Link>
        <PublicArea />
        <AuthorisedOnlyProvider>
          <AuthorisedOnly />
        </AuthorisedOnlyProvider>
      </div>
    </>
  );
};

export default Home;
