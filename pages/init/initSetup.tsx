import { ReactElement } from "react";
import Head from "next/head";
import { Layout as InitLayout } from "@/layouts/init/layout";
import { InitSetupContent } from "@/sections/initSetup/initSetupContent";

const Page = () => {
  return (
    <>
      <Head>
        <title>BiBot | 초기셋업</title>
      </Head>
      <InitSetupContent />
    </>
  );
};

Page.getLayout = (page: ReactElement) => <InitLayout>{page}</InitLayout>;

export default Page;
