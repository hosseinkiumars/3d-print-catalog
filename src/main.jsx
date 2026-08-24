import React from "react";
import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
} from "react-router-dom";

import {
  CssBaseline,
  ThemeProvider,
} from "@mui/material";

import {
  CacheProvider,
} from "@emotion/react";

import App from "./App";
import theme from "./theme/theme";
import rtlCache from "./theme/rtl";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </CacheProvider>
  </React.StrictMode>
);