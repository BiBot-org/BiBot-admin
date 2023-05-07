import Head from "next/head";
import {
  Box,
  Container,
  Unstable_Grid2 as Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Layout as DashboardLayout } from "@/layouts/dashboard/layout";
import { ApprovalTable } from "@/sections/approval/approval-table";
import { ApprovalSearch } from "@/sections/approval/approval-search";
import { ReactElement } from "react";

const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>BiBot | 결재 내역 조회 페이지</title>
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
          <Typography variant="h4">결재 내역 조회</Typography>
          <ApprovalSearch />
          <ApprovalTable />
        </Stack>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Page;
