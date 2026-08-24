import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",

  palette: {
    mode: "light",

    primary: {
      main: "#171717",
      contrastText: "#ffffff",
    },

    secondary: {
      main: "#e85d04",
      contrastText: "#ffffff",
    },

    background: {
      default: "#fafafa",
      paper: "#ffffff",
    },

    text: {
      primary: "#171717",
      secondary: "#737373",
    },

    divider: "#e5e5e5",
  },

  typography: {
    fontFamily: [
      "Vazirmatn",
      "Tahoma",
      "Arial",
      "sans-serif",
    ].join(","),

    h1: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
      lineHeight: 1.2,
    },

    h2: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
      lineHeight: 1.25,
    },

    h3: {
      fontWeight: 750,
      letterSpacing: "-0.015em",
    },

    h4: {
      fontWeight: 700,
    },

    h5: {
      fontWeight: 700,
    },

    h6: {
      fontWeight: 700,
    },

    body1: {
      lineHeight: 1.9,
    },

    body2: {
      lineHeight: 1.8,
    },

    button: {
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 14,
  },

  spacing: 8,

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },

        body: {
          backgroundColor: "#fafafa",
        },

        "*": {
          boxSizing: "border-box",
        },

        "::selection": {
          backgroundColor: "#171717",
          color: "#ffffff",
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: {
          minHeight: 44,
          paddingInline: 22,
          borderRadius: 10,
          textTransform: "none",
          fontWeight: 600,
        },

        containedPrimary: {
          backgroundColor: "#171717",

          "&:hover": {
            backgroundColor: "#303030",
          },
        },

        containedSecondary: {
          backgroundColor: "#e85d04",

          "&:hover": {
            backgroundColor: "#c94f03",
          },
        },

        outlined: {
          borderColor: "#d4d4d4",

          "&:hover": {
            borderColor: "#171717",
            backgroundColor: "#f5f5f5",
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: "1px solid #eeeeee",
          boxShadow: "none",
          overflow: "hidden",
          backgroundColor: "#ffffff",
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#eeeeee",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },

    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },
});

export default theme;