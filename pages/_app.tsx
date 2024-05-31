import "bootstrap/dist/css/bootstrap.min.css";

import type { AppProps } from "next/app";
import React, { FC } from "react";

import { App } from "@/app";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <App>
    {/* @ts-ignore */}
    <Component {...pageProps} />
  </App>
);

export default MyApp;
