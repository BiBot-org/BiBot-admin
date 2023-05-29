import Head from "next/head";
import { Box } from "@mui/material";
import { Layout as DashboardLayout } from "@/layouts/dashboard/layout";

import { ReactElement } from "react";
import { UserPageContent } from "@/sections/user/user-page-content";
const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>BiBot | 사원 정보 페이지</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <UserPageContent />
    </Box>
  </>
);

Page.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);
Page.auth = true;
export default Page;
