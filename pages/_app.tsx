import theme from "@/theme";
import { GlobalStyle } from "@/theme/GlobalStyle";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import NProgress from "nprogress";

import "nprogress/nprogress.css";
import Router from "next/router";

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 100,
  minimum: 0.1,
  easing: "ease",
  speed: 500,
});

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle>
        <Component {...pageProps} />
        <Analytics />
      </GlobalStyle>
    </ChakraProvider>
  );
}
