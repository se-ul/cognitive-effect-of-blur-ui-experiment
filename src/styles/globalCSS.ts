import { css } from "@emotion/react";
import { normalizeCSS } from "./normalizeCSS";

export const globalCSS = css`
  ${normalizeCSS}

  html, body, #__next {
    height: 100%;
    background-color: black;
  }

  body {
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue",
      Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }
`;
