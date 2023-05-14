import Head from "next/head";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@/theme";
import { createEmotionCache } from "@/utils/create-emotion-cache";
import "simplebar-react/dist/simplebar.min.css";
import { AppProps } from "next/app";
import { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";
import Router from "next/router";
import nProgress from "nprogress";

const clientSideEmotionCache = createEmotionCache();

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface BibotAppProps extends AppProps {
  emotionCache: EmotionCache;
  Component: NextPageWithLayout;
}

function App(props: BibotAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const theme = createTheme();

  const getLayout = Component.getLayout ?? ((page) => page);

  Router.events.on("routeChangeStart", nProgress.start);
  Router.events.on("routeChangeError", nProgress.done);
  Router.events.on("routeChangeComplete", nProgress.done);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>BiBot-org</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </LocalizationProvider>
    </CacheProvider>
  );
}

export default App;
