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
              <Typography variant="h4">회사 이름을 입력 해 주세요</Typography>
              <Typography color="text.secondary" variant="body2">
                회사 이름은 영문, 국문 포함 20자 미만이어야 합니다.
              </Typography>
            </Stack>

            <form noValidate>
              <Stack spacing={3}>
                <TextField fullWidth label="회사명" name="email" type="email" />
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
                    회사 명 등록
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
            </form>
          </div>
        </Box>
      </Box>
    </>
  );
};

Page.getLayout = (page: ReactElement) => <InitLayout>{page}</InitLayout>;

export default Page;
