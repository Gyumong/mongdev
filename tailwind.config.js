const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  jit: true,
  theme: {
    extend: {
      fontFamily: {
        "Sf-display": [
          "var(--font-sfpro-display)",
          ...defaultTheme.fontFamily.sans,
        ],
        "Sf-text": ["var(--font-sfpro-text)", ...defaultTheme.fontFamily.sans],
      },
      height: {
        fullScreen: "calc(100vh - 52px)",
      },
      padding: {
        "mobile-env": "env(safe-area-inset-bottom)",
        "mobile-constant": "constant(safe-area-inset-bottom)",
      },
      margin: {
        "mobile-env": "env(safe-area-inset-bottom)",
        "mobile-constant": "constant(safe-area-inset-bottom)",
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        ".page-padding": {
          paddingLeft: "16px",
          paddingRight: "16px",
          ["@media (min-width: 320px)"]: {
            paddingLeft: "18px",
            paddingRight: "18px",
          },
          ["@media (min-width: 376px)"]: {
            paddingLeft: "20px",
            paddingRight: "20px",
          },
        },
        ".body-14": {
          fontFamily: "Sf-text",
          fontSize: "0.875rem",
          fontWeight: "500",
          lineHeight: 1.43,
        },
        ".body-16": {
          fontFamily: "Sf-text",
          fontSize: "1rem",
          fontWeight: "500",
          lineHeight: 1.44,
        },
        ".title-22": {
          fontFamily: "Sf-display",
          fontSize: "1.375rem",
          fontWeight: "700",
          lineHeight: 1.36,
        },
        ".title-24": {
          fontFamily: "Sf-display",
          fontSize: "1.5rem",
          fontWeight: "700",
          lineHeight: 1.34,
        },
        ".title-26": {
          fontFamily: "Sf-display",
          fontSize: "1.625rem",
          fontWeight: "700",
          lineHeight: 1.3,
        },
      });
    }),
  ],
};
