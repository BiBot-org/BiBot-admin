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
              <Typography variant="h4">환영합니다!</Typography>
              <Typography color="text.secondary" variant="body2">
                관리자 정보를 입력 해 주세요
              </Typography>
            </Stack>

            <form noValidate>
              <Stack spacing={3}>
                <TextField fullWidth label="이메일" name="email" type="email" />
                <TextField
                  fullWidth
                  label="비밀번호"
                  name="password"
                  type="password"
                />
              </Stack>

              <Button
                fullWidth
                size="large"
                sx={{ mt: 3 }}
                type="submit"
                variant="contained"
              >
                관리자 계정 등록
              </Button>
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
