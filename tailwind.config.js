/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'JetBrains Mono'", "'Fira Code'", "'Cascadia Code'", "monospace"],
        sans: ["'JetBrains Mono'", "'Fira Code'", "monospace"],
      },
      colors: {
        // One Dark Pro palette
        dark: {
          bg: "#282c34",
          surface: "#21252b",
          border: "#181a1f",
          selection: "#3e4451",
          line: "#2c313a",
        },
        accent: {
          blue: "#61afef",
          red: "#e06c75",
          green: "#98c379",
          yellow: "#e5c07b",
          purple: "#c678dd",
          cyan: "#56b6c2",
          orange: "#d19a66",
        },
        muted: {
          DEFAULT: "#5c6370",
          light: "#7f848e",
          dark: "#3b4048",
        },
        fg: {
          DEFAULT: "#abb2bf",
          light: "#cdd2db",
          white: "#dcdfe4",
        },
      },
    },
  },
  plugins: [],
};
