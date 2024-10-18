import Footer from "@/components/Footer";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='ru'>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='Интернет-магазин Poryadok-yu.info – бытовые товары: наклейки, держатели, зажимы, шкатулки и многое другое. Специальная акция – скидки на все товары!'
        />
        <meta
          name='keywords'
          content='наклейки, держатели, зажимы, шкатулки, бытовые товары, акции, скидки, интернет-магазин'
        />
        <meta name='author' content='Poryadok-yu.info' />
        <meta
          property='og:title'
          content='Poryadok-yu.info – Товары для дома со скидками'
        />
        <meta
          property='og:description'
          content='Успейте купить бытовые товары по сниженным ценам! Акция на наклейки, держатели, зажимы и другие полезные вещи.'
        />
        <meta property='og:image' content='/images/logo.png' />
        <meta property='og:url' content='https://poryadok-yu.info' />
        <meta property='og:type' content='website' />
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
