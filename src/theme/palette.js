import { createTheme } from "@mui/material";

const BRAND = {
  primary01: "#005B3B",
  primary02: "#009C64",
  primary03: "#00FFA4",
  primary04: "#DDF6ED",
  secondary: "#000000",
};

const GREY = {
  900: "#000000", // Gray01
  800: "#121212", // Gray02
  700: "#333333", // Gray03
  600: "#666666", // Gray04
  550: "#787878", // Gray05
  500: "#999999", // Gray06
  400: "#BBBBBB", // Gray07
  300: "#CCCCCC", // Gray08
  200: "#DDDDDD", // Gray09
  100: "#EFEFEF", // Gray10
  50: "#FAFAFA", // Gray11
};

const FEEDBACK = {
  error: "#D12E34",
  warning: "#F59E0B",
  info: "#3B82F6",
  success: "#16A34A",
};

let baseTheme = createTheme();

function makeColor(name, main, contrastText = "#fff") {
  return baseTheme.palette.augmentColor({
    color: { main, contrastText },
    name,
  });
}

const palette = {
  mode: "light",

  primary: makeColor("primary", BRAND.primary03, GREY[800]),
  secondary: makeColor("secondary", BRAND.secondary, "#FFFFFF"),
  error: makeColor("error", FEEDBACK.error, "#FFFFFF"),
  warning: makeColor("warning", FEEDBACK.warning, "#111827"),
  info: makeColor("info", FEEDBACK.info, "#FFFFFF"),
  success: makeColor("success", FEEDBACK.success, "#FFFFFF"),

  grey: GREY,
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    disabled: "rgba(17, 24, 39, 0.38)",
  },
  background: { default: "#FFFFFF", paper: "#FFFFFF" },
  divider: GREY[200],

  // 커스텀 팔레트 슬롯
  primary01: makeColor("primary01", BRAND.primary01, "#FFFFFF"),
  primary02: makeColor("primary02", BRAND.primary02, "#FFFFFF"),
  primary03: makeColor("primary03", BRAND.primary03, GREY[800]),
  primary04: makeColor("primary04", BRAND.primary04, GREY[800]),
};

export default palette;
