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
        bungee: ['Bungee Tint'],
        heading: ["Varela Round"],
      },
      colors: {
        primary: "#222831",
        secondary: "#F8F1F1",
        tirtry: "#eb2c46",
        forth: "#B43F3F",
        fifth: "#021526",
        six: "#0e113e"
      },
    },
  },
   plugins: [],
 }
