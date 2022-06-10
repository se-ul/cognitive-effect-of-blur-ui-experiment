import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { RenderOnClient } from "../src/components/RenderOnClient";
import { globalCSS } from "../src/styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalCSS} />
      <RenderOnClient>
        <Component {...pageProps} />
      </RenderOnClient>
    </>
  );
}

export default MyApp;
