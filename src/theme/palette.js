import { alpha } from "@mui/material/styles";

const BRAND = {
  primary: "#27B06E",
  secondary: "#0F172A",
};

const GREY = {
  50: "#F9FAFB",
  100: "#F3F4F6",
  200: "#E5E7EB",
  300: "#D1D5DB",
  400: "#9CA3AF",
  500: "#6B7280",
  600: "#4B5563",
  700: "#374151",
  800: "#1F2937",
  900: "#111827",
};

const FEEDBACK = {
  error: "#EF4444",
  warning: "#F59E0B",
  info: "#3B82F6",
  success: "#16A34A",
};

const palette = (mode = "light") => {
  const isLight = mode === "light";

  const text = {
    primary: isLight ? GREY[900] : "#F3F4F6",
    secondary: isLight ? GREY[600] : GREY[300],
    disabled: isLight ? alpha(GREY[900], 0.38) : alpha("#F3F4F6", 0.38),
  };

  const background = {
    default: isLight ? "#FFFFFF" : "#0B1020",
    paper: isLight ? "#FFFFFF" : "#0E1426",
  };

  return {
    mode,

    primary: {
      main: BRAND.primary,
      light: "#4FD39A",
      dark: "#1E8A55",
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: BRAND.secondary,
      light: "#27324A",
      dark: "#0A1020",
      contrastText: "#FFFFFF",
    },

    error: {
      main: FEEDBACK.error,
      light: "#F87171",
      dark: "#B91C1C",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: FEEDBACK.warning,
      light: "#FBBF24",
      dark: "#B45309",
      contrastText: "#111827",
    },
    info: {
      main: FEEDBACK.info,
      light: "#60A5FA",
      dark: "#1D4ED8",
      contrastText: "#FFFFFF",
    },
    success: {
      main: FEEDBACK.success,
      light: "#34D399",
      dark: "#166534",
      contrastText: "#FFFFFF",
    },

    grey: GREY,
    text,
    background,

    divider: isLight ? GREY[200] : alpha("#FFFFFF", 0.12),

    action: {
      active: isLight ? GREY[700] : "#E5E7EB",
      hover: isLight ? alpha(GREY[900], 0.06) : alpha("#FFFFFF", 0.08),
      selected: isLight ? alpha(GREY[900], 0.12) : alpha("#FFFFFF", 0.16),
      disabled: isLight ? alpha(GREY[900], 0.38) : alpha("#FFFFFF", 0.38),
      disabledBackground: isLight
        ? alpha(GREY[900], 0.12)
        : alpha("#FFFFFF", 0.12),
      focus: isLight ? alpha(BRAND.primary, 0.24) : alpha(BRAND.primary, 0.32),
      hoverOpacity: 0.06,
      disabledOpacity: 0.38,
      focusOpacity: 0.12,
      selectedOpacity: 0.12,
      activatedOpacity: 0.12,
    },
    brandGradient: `linear-gradient(90deg, ${BRAND.primary}, ${alpha(
      "#0EA5A5",
      0.9
    )})`,
    outline: isLight ? GREY[200] : alpha("#FFFFFF", 0.16),
  };
};

export default palette;
