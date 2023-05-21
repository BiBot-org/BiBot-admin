import Head from "next/head";
import {
  Box,
  Button,
  Container,
  Unstable_Grid2 as Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Layout as DashboardLayout } from "@/layouts/dashboard/layout";
import { UserTable } from "@/sections/user/user-table";
import { UserSearch } from "@/sections/user/user-search";
import { ReactElement } from "react";
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
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <Typography variant="h4">사원 정보 조회</Typography>
          <UserSearch />
          <UserTable />
        </Stack>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Page;
