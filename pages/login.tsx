import { ReactElement } from "react";
import Head from "next/head";
import { Layout as AuthLayout } from "@/layouts/auth/layout";
import { LoginPageContent } from "@/sections/login/login-page-content";

const Page = () => {
  return (
    <>
      <Head>
        <title>BiBot | 로그인</title>
      </Head>
      <LoginPageContent />
    </>
  );
};

Page.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;

export default Page;
