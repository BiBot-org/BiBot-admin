import { Error404Content } from "@/sections/404/error-404-content";
import Head from "next/head";

const Page = () => (
  <>
    <Head>
      <title>404 | BiBot.org</title>
    </Head>
    <Error404Content />
  </>
);

export default Page;
