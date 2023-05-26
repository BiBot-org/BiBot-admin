import Head from "next/head";
import { Box, Container, Unstable_Grid2 as Grid, Stack } from "@mui/material";
import { Layout as DashboardLayout } from "@/layouts/dashboard/layout";
import { Typography } from "@mui/material";
import { ReactElement } from "react";
import { SetupManager } from "@/sections/setting/setting-managers";
import { SetupManagerDetails } from "@/sections/setting/setting-manager-detail";
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
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <div>
            <Typography variant="h4">관리자 목록</Typography>
          </div>
          <div>
            <Grid container spacing={3}>
              <Grid xs={12} md={6} lg={4}>
                <SetupManager />
              </Grid>
              <Grid xs={12} md={6} lg={8}>
                <SetupManagerDetails />
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
