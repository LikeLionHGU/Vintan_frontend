import { GlobalStyles as MUIGlobalStyles } from "@mui/material";

const isWindows = navigator.platform.toLowerCase().includes("win");

export default function GlobalStyle() {
  const inputGlobalStyle = (
    <MUIGlobalStyles
      styles={{
        "*": {
          boxSizing: "border-box",
          fontFamily: "Pretendard Variable",
          ...(isWindows
            ? {
                textShadow: "0 0 1px rgba(0,0,0,0.3)",
              }
            : {
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
                fontSmooth: "never",
              }),
        },
        html: {
          margin: 0,
          padding: 0,
          width: "100%",
          // height: "100%",
          //WebkitOverflowScrolling: "touch",
        },
        body: {
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
        },
        "#root": {
          width: "100%",
          height: "100%",
        },
        input: {
          outline: "none",
          "&[type=number]": {
            MozAppearance: "textfield",
            "&::-webkit-outer-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
            "&::-webkit-inner-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
          },
        },
        img: {
          display: "block",
          maxWidth: "100%",
          WebkitUserDrag: "none",
        },
        ul: {
          margin: 0,
          padding: 0,
        },
        a: {
          textDecoration: "none",
          color: "inherit",
        },
        span: {
          whiteSpace: "pre-line",
        },
      }}
    />
  );

  return inputGlobalStyle;
}
