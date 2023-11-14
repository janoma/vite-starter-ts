import React from "react";
import ReactDOM from "react-dom/client";

import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";

import App from "./App.tsx";

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <CssVarsProvider>
        <CssBaseline />
        <App />
      </CssVarsProvider>
    </React.StrictMode>,
  );
}
