import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { globalCSS } from "../src/styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalCSS} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
