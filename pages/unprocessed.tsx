import UnProcessedHistoryContent from "@/sections/payment/unprocessed-history-content";
import Head from "next/head";
import { ReactElement } from "react";
import { Layout as DashboardLayout } from "@/layouts/dashboard/layout";

const Page = () => (
  <>
    <Head>
      <title>BiBot | 미처리 내역</title>
    </Head>
    <UnProcessedHistoryContent />
  </>
);

Page.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Page;
