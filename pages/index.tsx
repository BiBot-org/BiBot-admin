import Head from "next/head";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { ReactElement, useEffect, useState } from "react";
import { Layout as DashboardLayout } from "@/layouts/dashboard/layout";
import { OverviewNotice } from "@/sections/overview/overview-notice";
import { noticeMockData } from "@/data/notices/noticeData";
import { approvalOverviewMockData } from "@/data/approvals/approvalData";
import { OverviewApproval } from "@/sections/overview/overview-approval";

const Page = () => {
  const [isGuideOpen, setIsGuideOpen] = useState<boolean>(false);
  const [isInit, setIsInit] = useState<boolean>(false);
  const handleGuideOpen = () => {
    setIsGuideOpen(true);
  };
  const handleGuideClose = () => {
    setIsGuideOpen(false);
  };
  useEffect(() => {
    if (!isInit) {
      handleGuideOpen();
    }
  }, []);

  return (
    <>
      <Head>
        <title>BiBot | Admin</title>
      </Head>
      <Dialog open={isGuideOpen} onClose={handleGuideClose}>
        <DialogTitle id="alert-dialog-title">
          BiBot 에 오신 것을 환영합니다!
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            자동 경비 처리 시스템 BiBot에 오신 것을 환영합니다.
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            가이드 페이지는 상단 바의 가이드 버튼을 통해 확인하실 수 있습니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleGuideClose}>다시 보지 않기</Button>
          <Button onClick={handleGuideClose} autoFocus>
            닫기
          </Button>
        </DialogActions>
      </Dialog>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid xs={12} sm={12} lg={12}>
              <OverviewNotice
                notices={noticeMockData}
                sx={{
                  height: "100%",
                }}
              />
            </Grid>
            <Grid xs={12} sm={12} lg={12}>
              <OverviewApproval
                approvals={approvalOverviewMockData}
                sx={{
                  height: "100%",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);
export default Page;
