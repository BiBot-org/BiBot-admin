import Head from "next/head";
import { Layout as DashboardLayout } from "@/layouts/dashboard/layout";
import { ReactElement } from "react";
import { ManagerContent } from "@/sections/manager/manager-content";
const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>BiBot | 관리자 페이지 </title>
    </Head>
    <ManagerContent />
  </>
);

Page.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);
Page.auth = true;
export default Page;
