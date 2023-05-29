import Head from "next/head";
import { Box, Container, Unstable_Grid2 as Grid, Stack } from "@mui/material";
import { Layout as DashboardLayout } from "@/layouts/dashboard/layout";
import { Typography } from "@mui/material";
import { ReactElement } from "react";
import { SetupManager } from "@/sections/setting/setting-managers";
import { SetupManagerDetails } from "@/sections/setting/setting-manager-detail";
import { ManagerContent } from "@/sections/manager/manager-content";
const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>BiBot | 관리자 페이지 </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <ManagerContent />
    </Box>
  </>
);

Page.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);
Page.auth = true;
export default Page;
