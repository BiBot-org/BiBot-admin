import Head from "next/head";
import { Box, Container, Unstable_Grid2 as Grid, Stack } from "@mui/material";
import { Layout as DashboardLayout } from "@/layouts/dashboard/layout";
import { OverviewNotice } from "@/sections/overview/overview-notice";
import { OverviewApproval } from "@/sections/overview/overview-approval";
import { Typography } from "@mui/material";
import { SetupCategories } from "@/sections/setting/setting-categories";
import { SettingCategoriesDetails } from "@/sections/setting/setting-categories-detail";
import { ReactElement } from "react";
const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>BiBot | 환경설정 </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <div>
            <Typography variant="h4">경비 항목 설정</Typography>
          </div>
          <div>
            <Grid container spacing={3}>
              <Grid xs={12} md={6} lg={4}>
                <SetupCategories />
              </Grid>
              <Grid xs={12} md={6} lg={8}>
                <SettingCategoriesDetails />
              </Grid>
            </Grid>
          </div>
        </Stack>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Page;
