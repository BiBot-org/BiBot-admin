import Head from "next/head";
import { Box, Container, Unstable_Grid2 as Grid, Stack } from "@mui/material";
import { Layout as DashboardLayout } from "@/layouts/dashboard/layout";
import { Typography } from "@mui/material";
import { NoticeDetailContents } from "@/sections/notice/notice-detail";
import { ReactElement } from "react";
const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>BiBot | 공지사항</title>
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
          <Typography variant="h4">공지 사항</Typography>
          <NoticeDetailContents />
        </Stack>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Page;
