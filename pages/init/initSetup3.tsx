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
                회사의 직급 체계를 선택 해 주세요
              </Typography>
              <Typography color="text.secondary" variant="body2">
                프리셋을 선택 해 주세요.
              </Typography>
            </Stack>

            <Stack spacing={3}>
              <Card>
                <CardHeader title="일반적인 직급체계 입니다." />
                <Divider />
                <CardContent>
                  <Typography>
                    사원, 대리, 과장, 부장 등의 일반적인 직급 체계입니다.
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader title="직급이 없는 수평적인 조직입니다." />
                <Divider />
                <CardContent>
                  <Typography>
                    매니저, 프로 등 직급이 없는 체계입니다.
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader title="기타" />
                <Divider />
                <CardContent>
                  <Typography>
                    우리 회사만의 특별한 직급 체계가 존재합니다.
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
            <Grid container sx={{ flex: "1 1 auto" }}>
              <Grid xs={12} lg={6}>
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  variant="contained"
                >
                  이전
                </Button>
              </Grid>
              <Grid xs={12} lg={6}>
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
