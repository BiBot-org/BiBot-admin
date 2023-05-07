import { ReactElement, SetStateAction, useCallback, useState } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import {
  Alert,
  Box,
  Button,
  FormHelperText,
  Link,
  Stack,
  Tab,
  Tabs,
  TextField,
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { Layout as InitLayout } from "@/layouts/init/layout";

const Page = () => {
  const router = useRouter();

  const handleSkip = useCallback(() => {
    // auth.skip();
    router.push("/");
  }, [router]);

  return (
    <>
      <Head>
        <title>BiBot | 로그인</title>
      </Head>
      <Box
        sx={{
          backgroundColor: "background.paper",
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: "100px",
            width: "100%",
          }}
        >
          <div>
            <Stack spacing={1} sx={{ mb: 3 }}>
              <Typography variant="h4">
                경비 처리 항목 및 결재 한도를 입력 해 주세요.
              </Typography>
              <Typography color="text.secondary" variant="body2">
                회사의 정책에 맞게 경비 항목 및 한도를 입력 해 주세요.
              </Typography>
            </Stack>
            <Grid container></Grid>

            <Stack spacing={3}>
              <Accordion>
                <AccordionSummary>
                  <Typography>식비</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Card>
                    <CardHeader title="한도" />
                    <CardContent>
                      <Typography>150000 원</Typography>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader title="주기" />
                    <CardContent>
                      <Typography>월 1회</Typography>
                    </CardContent>
                  </Card>
                </AccordionDetails>
              </Accordion>

              <Grid container>
                <Grid xs={5} lg={6}>
                  <Button
                    fullWidth
                    size="large"
                    sx={{ mt: 3 }}
                    variant="contained"
                  >
                    추가
                  </Button>
                </Grid>
              </Grid>
            </Stack>
            <Grid container>
              <Grid xs={5} lg={6}>
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  variant="contained"
                >
                  이전
                </Button>
              </Grid>
              <Grid xs={5} lg={6}>
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  variant="contained"
                >
                  다음
                </Button>
              </Grid>
            </Grid>

            {/* <Button
                fullWidth
                size="large"
                sx={{ mt: 3 }}
                onClick={handleSkip}
              >
                Skip authentication
              </Button> */}
          </div>
        </Box>
      </Box>
    </>
  );
};

Page.getLayout = (page: ReactElement) => <InitLayout>{page}</InitLayout>;

export default Page;
