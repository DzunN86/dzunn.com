import * as React from "react";
import emotionCache from "src/libs/emotion-cache";
import { ColorModeScript } from "@chakra-ui/react";
import createEmotionServer from "@emotion/server/create-instance";
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
const { extractCritical } = createEmotionServer(emotionCache);
export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = extractCritical(initialProps.html);
    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <style
          key="emotion-css"
          dangerouslySetInnerHTML={{ __html: styles.css }}
          data-emotion-css={styles.ids.join(" ")}
        />,
      ],
    };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta content="ie=edge" httpEquiv="X-UA-Compatible" />
          <script
            defer
            data-domain="nikolovlazar.com"
            src="https://plausible.io/js/plausible.js"
          />
          <meta name="monetization" content="$ilp.uphold.com/nZ4DF39aHkrm" />
          <link
            rel="preload"
            href="/assets/fonts/CalSans-SemiBold.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/assets/fonts/CalSans-SemiBold.woff"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/assets/fonts/CalSans-SemiBold.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🥐</text></svg>"
          />
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
