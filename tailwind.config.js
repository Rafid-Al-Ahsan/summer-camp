/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary1: '#efb999'
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: ["light"],
  },
}