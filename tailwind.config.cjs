/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        white: "#f0f4f7", 
        grey: "#445264", 
        primary: "#58c0a6", 
        greenDark: "#04503d", 
        blueDark: "#222e55", 
        greeyLigth: "#e4e4e4", 
        greenLigth: "#e9f7fc"
      },
      fontFamily: {
        poppins: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};