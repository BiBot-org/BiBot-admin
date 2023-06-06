import Head from "next/head";

import { ReactElement } from "react";
import { Layout as DashboardLayout } from "@/layouts/dashboard/layout";

import { IsInit } from "@/service/user/UserService";
import { MainPageContent } from "@/sections/main/main-page-content";

export async function getServerSideProps(result: any) {
  const initState = await IsInit().then((res) => res.data);
  if (initState === true) {
    result.res.writeHead(302, {
      Location: "/init/initSetup",
    });
    result.res.end();
    return {
      props: {},
    };
  }
  return {
    props: {},
  };
}

const Page = () => {
  return (
    <>
      <Head>
        <title>BiBot | Admin</title>
      </Head>
      <MainPageContent />
    </>
  );
};

Page.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);
Page.auth = true;
export default Page;
