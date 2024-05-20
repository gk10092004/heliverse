
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs1: "330px",
      xs2: "640px",
      xs3: "1000px",
      xs4: "1200px",
            
      ...defaultTheme.screens
    },
    extend: {
      keyframes : {
        'lianimate' : {
          '0%': { filter: 'hue-rotate(0deg) blur(1px)' },
          '100%': { filter: 'hue-rotate(360deg) blur(10px)' }
        }
      },
      animation : {
        'lianimate' : 'lianimate 5s linear infinite'
      },
      fontFamily:{
        Sora:["Sora"]
      },
    },
  },
  plugins: [],
}