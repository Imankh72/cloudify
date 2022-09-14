/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
    colors: {
      primary: "#6acdee",
      secondary: "#f6b319",
      tertiary: "#c071ae",
      accent: "#10103c",
    },
  },
  plugins: [],
};
