/** @type {import('tailwindcss').Config} */
module.exports = {

  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: 'media', // or 'media' or 'class'
   theme: {
    extend: {
      screens: {
        xs: "350px",
      },
      fontFamily: {
        sans: "sans-serif",
        poppins: ["poppins"],
        overlock: ["Sofia Sans"],
        heading: ["Sofia Sans"],
      },
      colors: {
        primary: "#222831",
        secondary: "#F8F1F1",
        tirtry: "#eb2c46",
        forth: "#B43F3F",
        fifth: "#173B45",
        six: "#0e113e"
      },
    },
  },
   plugins: [],
 }
