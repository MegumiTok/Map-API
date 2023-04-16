/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./stories/**/*.{js,ts,jsx,tsx}"],
  // Ensure these match with .storybook/preview.js
  theme: {
    colors: {
      primally: "#33A9A2",
      dark500: "#3B4043",
      dark800: "#2E2E2E",
      white: "#fff",
    },
    screens: {
      xs: "375px",
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
  },

  plugins: [],
};
