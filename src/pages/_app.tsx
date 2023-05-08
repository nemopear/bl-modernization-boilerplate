import "@/styles/globals.scss";
import "@/styles/tailwind.scss";
import theme from "@/styles/theme";
import createEmotionCache from "@/styles/theme/createEmotionCache";
import { CacheProvider, EmotionCache, ThemeProvider } from "@emotion/react";
import { StyledEngineProvider, CssBaseline } from "@mui/material";
import { NextIntlProvider } from "next-intl";
import type { AppProps } from "next/app";
import Head from "next/head";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta charSet="UTF-8" />
        <title>Batchline</title>
      </Head>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <NextIntlProvider messages={pageProps.messages}>
            <Component {...pageProps} />
          </NextIntlProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </CacheProvider>
  );
}
