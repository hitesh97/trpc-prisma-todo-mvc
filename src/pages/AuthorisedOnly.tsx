import type { NextPage } from "next";
import Link from "next/link";

const AuthorisedOnlyArea: NextPage = () => {
  return (
    <>
      <div>This is Authorised Area and will not be visible unless Authenticated!!</div>
      <div>
        everything here is visible to Authorised personnell only
      </div>
    </>
  );
};

export default AuthorisedOnlyArea;
