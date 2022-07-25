/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "5px 5px 40px  gray",
      },
    },
    backgroundImage: {
      "jimmi-bg": "url('/src/img/wp4338922-jimin-2019-wallpapers.jpg')",
      "inu-bg": "url('/src/img/f6914d53267ff1bf9b9f0c399cf8f105.jpg')",
    },
    fontFamily: {
      serif: ["Ibarra Real Nova", "serif"],
      nunito: ["Nunito", "sans-serif"],
    },
  },
  plugins: [],
};
