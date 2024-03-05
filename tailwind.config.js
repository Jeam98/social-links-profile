/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Green: "#c5f82a",
        White: "#ffffff",
        Grey: "#333333",
        DarkGrey: "#1f1f1f",
        OffBlack: "#141414",
      },
    },
    fontFamily: {
      inter: ["Inter"],
    },
  },
  plugins: [],
};
