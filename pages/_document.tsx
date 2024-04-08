import { Head, Html, Main, NextScript } from "next/document";

const Document = () => (
  <Html>
    {/* @ts-ignore */}
    <Head>
      {/* eslint-disable-next-line */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <body>
      <Main />
      {/* @ts-ignore */}
      <NextScript />
    </body>
  </Html>
);

export default Document;
