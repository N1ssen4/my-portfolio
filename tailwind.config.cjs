/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        Background: "url('/Background.jpg')",
      },
    },
    fontFamily: {
      Dosis: ["Dosis"],
      Lato: ["Lato"],
    },
  },
  plugins: [],
};
