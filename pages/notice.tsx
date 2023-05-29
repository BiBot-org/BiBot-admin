import Head from "next/head";
import { Box, Container, Unstable_Grid2 as Grid, Stack } from "@mui/material";
import { Layout as DashboardLayout } from "@/layouts/dashboard/layout";
import { OverviewNotice } from "@/sections/overview/overview-notice";
import { OverviewApproval } from "@/sections/overview/overview-approval";
import { Typography } from "@mui/material";
import { NoticeTable } from "@/sections/notice/notice-table";
import { ReactElement } from "react";
import { NoticePageContent } from "@/sections/notice/notice-page-content";
const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>BiBot | 공지 사항</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <NoticePageContent />
    </Box>
  </>
);

Page.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Page;
