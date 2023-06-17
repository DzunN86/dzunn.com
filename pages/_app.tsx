import theme from "@/theme";
import { GlobalStyle } from "@/theme/GlobalStyle";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

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
