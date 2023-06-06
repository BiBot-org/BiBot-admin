import Head from "next/head";
import { Layout as DashboardLayout } from "@/layouts/dashboard/layout";
import { ReactElement } from "react";
import { MyPageContent } from "@/sections/mypage/my-page-content";

const Page = () => {
  return (
    <>
      <Head>
        <title>BiBot | 마이페이지</title>
      </Head>
      <MyPageContent />
    </>
  );
};

Page.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);
Page.auth = true;
export default Page;
