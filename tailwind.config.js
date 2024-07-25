/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
        tirtry: "#EE2B47",
        forth: "#B43F3F",
        fifth: "#173B45",
        six: "#0e113e"
      },
    },
  },
  plugins: [],
};
