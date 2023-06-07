import Head from "next/head";
import { Layout as DashboardLayout } from "@/layouts/dashboard/layout";
import { ReactElement } from "react";
import { ApprovalPageContent } from "@/sections/approval/approval-page-content";

const Page = () => (
  <>
    <Head>
      <title>BiBot | 결재 내역 조회 페이지</title>
    </Head>
    <ApprovalPageContent />
  </>
);

Page.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);
Page.auth = true;
export default Page;
