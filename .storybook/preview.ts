/// <reference types="vite/client" />
import "../src/styles/cores.tokens.css";
import "../src/styles/text.tokens.css";
import "../src/styles/spaces.tokens.css";
import "../src/styles/tokens.css";
import "../src/styles/globals.css";

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  backgrounds: {
    default: "light",
    values: [
      { name: "light", value: "#ffffff" },
      { name: "dark", value: "#1a1a1a" },
    ],
  },

  a11y: {
    // 'todo' - show a11y violations in the test UI only
    // 'error' - fail CI on a11y violations
    // 'off' - skip a11y checks entirely
    test: "todo",
  },
};
