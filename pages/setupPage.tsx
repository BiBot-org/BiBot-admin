import Head from "next/head";
import { Layout as DashboardLayout } from "@/layouts/dashboard/layout";
import { ReactElement } from "react";

import { SettingPageContent } from "@/sections/setting/setting-page-content";

const Page = () => {
  return (
    <>
      <Head>
        <title>BiBot | 환경설정 </title>
      </Head>

      <SettingPageContent />
    </>
  );
};

Page.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);
Page.auth = true;
export default Page;
