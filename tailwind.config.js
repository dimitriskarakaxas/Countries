const {
  hasSelectionSupport,
} = require("@testing-library/user-event/dist/utils");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        nunito: ["'Nunito Sans'", "sans-serif"],
      },
      colors: {
        "dark-blue-dm": "hsl(209, 23%, 22%)",
        "very-dark-blue-dm": "hsl(207, 26%, 17%)",
        "very-dark-blue-lm": "hsl(200, 15%, 8%)",
        "dark-gray-lm": "hsl(0, 0%, 52%)",
        "very-light-gray-lm": "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
