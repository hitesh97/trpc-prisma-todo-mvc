import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <div>This is index page</div>
      <div>
        <Link href="/all">see all todos here!</Link>
      </div>
    </>
  );
};

export default Home;
