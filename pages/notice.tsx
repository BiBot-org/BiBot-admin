import Head from "next/head";
import { Layout as DashboardLayout } from "@/layouts/dashboard/layout";
import { ReactElement } from "react";
import { NoticePageContent } from "@/sections/notice/notice-page-content";

const Page = () => (
  <>
    <Head>
      <title>BiBot | 공지 사항</title>
    </Head>

    <NoticePageContent />
  </>
);

Page.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Page;
