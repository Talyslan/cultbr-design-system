// Styles
import "./styles/globals.css";
import "./styles/tokens.css";
import "./styles/colors.tokens.css";
import "./styles/text.tokens.css";
import "./styles/spaces.tokens.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./app/app.tsx";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Elemento root não encontrado.");
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
