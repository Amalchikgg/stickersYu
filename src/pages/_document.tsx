import Footer from "@/components/Footer";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='ru'>
      <Head>
        <link data-rh='true' rel='icon' href='/images/logo.png' />
        <link rel='apple-touch-icon' href='/images/logo.png' />
        <meta
          name='facebook-domain-verification'
          content='fh5z1nqyuypkkbkqklia5cohyhh05g'
        />
      </Head>
      <body>
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
