const FONT_PRIMARY = "Pretendard Variable";

export function remToPx(value) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({ sm, md, lg }) {
  return {
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
    },
  };
}

const WEIGHT = { regular: 400, semibold: 600, bold: 700 };

const typography = {
  fontFamily: FONT_PRIMARY,

  display1: {
    fontWeight: WEIGHT.bold,
    lineHeight: 1.2,
    fontSize: pxToRem(56),
  },
  display2: {
    fontWeight: WEIGHT.semibold,
    lineHeight: 1.2,
    fontSize: pxToRem(40),
  },
  title1: {
    fontWeight: WEIGHT.bold,
    lineHeight: 1.3,
    fontSize: pxToRem(36),
  },
  title2: {
    fontWeight: WEIGHT.bold,
    lineHeight: 1.3,
    fontSize: pxToRem(28),
  },
  title3: {
    fontWeight: WEIGHT.semibold,
    lineHeight: 1.4,
    fontSize: pxToRem(24),
  },
  h1: {
    fontWeight: WEIGHT.semibold,
    lineHeight: 1.4,
    fontSize: pxToRem(22),
    letterSpacing: "0.02em",
  },
  h2: {
    fontWeight: WEIGHT.semibold,
    lineHeight: 1.5,
    fontSize: pxToRem(17),
    letterSpacing: "0.02em",
  },
  body1: {
    fontWeight: WEIGHT.regular,
    lineHeight: 1.6,
    fontSize: pxToRem(16),
    letterSpacing: "0.01em",
  },
  body2: {
    fontWeight: WEIGHT.regular,
    lineHeight: 1.6,
    fontSize: pxToRem(15),
    letterSpacing: "0.01em",
  },
  caption1: {
    fontWeight: WEIGHT.regular,
    lineHeight: 1.5,
    fontSize: pxToRem(15),
    letterSpacing: "0.01em",
  },
};

export default typography;
