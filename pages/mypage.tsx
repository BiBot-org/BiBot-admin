import Head from "next/head";
import {
  Box,
  Container,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { Layout as DashboardLayout } from "@/layouts/dashboard/layout";
import { AccountMyProfile } from "@/sections/account/account-myprofile";
import { AccountMyProfileDetails } from "@/sections/account/account-myprofile-details";
import { SettingsPassword } from "@/sections/account/settting-password";
import { ReactElement, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { GetUserInfo } from "@/service/user/UserService";
import { BibotUserInfo } from "@/types/user/User";
import { useRecoilState } from "recoil";
import { userInfoState } from "@/state/user/atom/userInfoState";

const Page = () => {
  const session = useSession();
  const [myUserInfo, setMyUserInfo] =
    useRecoilState<BibotUserInfo>(userInfoState);
  console.log(session);
  useEffect(() => {
    if (session) {
      const userId = session.data?.tokenInfo.id;
      GetUserInfo(userId).then((res) => setMyUserInfo(res.data));
    }
  }, []);

  return (
    <>
      <Head>
        <title>BiBot | 마이페이지</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3}>
            <div>
              <Typography variant="h4">마이페이지</Typography>
            </div>
            <div>
              <Grid container spacing={3}>
                <Grid xs={12} md={6} lg={4}>
                  <AccountMyProfile userInfo={myUserInfo} />
                </Grid>
                <Grid xs={12} md={6} lg={8}>
                  <AccountMyProfileDetails userInfo={myUserInfo} />
                </Grid>
              </Grid>
            </div>
            <SettingsPassword />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);
Page.auth = true;
export default Page;
