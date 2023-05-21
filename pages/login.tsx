import {
  ReactElement,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
import { Layout as AuthLayout } from "@/layouts/auth/layout";
import { useSetRecoilState } from "recoil";
import { userAuthState } from "@/state/user/atom/userLoginState";
import { getSession, signIn, useSession } from "next-auth/react";
const Page = () => {
  const { data: session, status } = useSession();

  const isLogin = session && status === "authenticated";

  useEffect(() => {
    if (isLogin) {
      router.push("/");
    }
    console.log(session, status);
  }, [isLogin]);

  const router = useRouter();
  const setUserInfo = useSetRecoilState(userAuthState);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("유효한 이메일을 입력 하셔야 합니다.")
        .max(255)
        .required("이메일을 입력 해 주세요."),
      password: Yup.string().max(255).required("비밀번호를 입력 해 주세요."),
    }),
    onSubmit: async (values) => {
      await signIn("keycloak", {
        username: values.email,
        password: values.password,
      })
        .then(() => {
          alert("환영합니다.");
        })
        .then(() => {
          router.push("/");
        })
        .catch(() => alert("아이디와 비밀번호를 확인하세요"));
    },
  });

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
              <Typography variant="h4">로그인</Typography>
            </Stack>

            <form noValidate onSubmit={formik.handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  error={!!(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="이메일"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="email"
                  value={formik.values.email}
                />
                <TextField
                  error={!!(formik.touched.password && formik.errors.password)}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
                  label="비밀번호"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.password}
                />
              </Stack>
              {formik.errors.submit && (
                <Typography color="error" sx={{ mt: 3 }} variant="body2">
                  {formik.errors.submit}
                </Typography>
              )}
              <Button
                fullWidth
                size="large"
                sx={{ mt: 3 }}
                type="submit"
                variant="contained"
              >
                로그인
              </Button>
            </form>
          </div>
        </Box>
      </Box>{" "}
    </>
  );
};

Page.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;

export default Page;
