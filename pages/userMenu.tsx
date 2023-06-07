import Head from "next/head";
import { Layout as DashboardLayout } from "@/layouts/dashboard/layout";
import { ReactElement } from "react";
import { UserPageContent } from "@/sections/user/user-page-content";

const Page = () => (
  <>
    <Head>
      <title>BiBot | 사원 정보 페이지</title>
    </Head>

    <UserPageContent />
  </>
);

Page.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);
Page.auth = true;
export default Page;
