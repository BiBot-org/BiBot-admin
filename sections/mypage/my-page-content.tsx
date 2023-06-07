"use client";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { AccountMyProfile } from "../account/account-myprofile";
import { AccountMyProfileDetails } from "../account/account-myprofile-details";
import { SettingsPassword } from "../account/settting-password";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { BibotUserInfo } from "@/types/user/User";
import { userInfoState } from "@/state/user/atom/userInfoState";
import { useEffect } from "react";
import { GetUserInfo } from "@/service/user/UserService";
import { useQuery } from "@tanstack/react-query";

export const MyPageContent = () => {
  const session = useSession();
  const [myUserInfo, setMyUserInfo] =
    useRecoilState<BibotUserInfo>(userInfoState);

  const userId = session.data?.tokenInfo.id;
  const { isLoading } = useQuery(
    [`userInfo : ${userId}`],
    () => GetUserInfo(userId),
    {
      refetchOnWindowFocus: false,
      retry: 0,
      onSuccess: (data) => {
        setMyUserInfo(data.data);
      },
    }
  );

  return (
    <>
      {!isLoading && (
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
      )}
    </>
  );
};
