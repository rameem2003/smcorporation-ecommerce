/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1600px",
      },

      backgroundImage: {
        bgScreen: "url(/bg1.jpg)",
      },

      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },

      boxShadow: {
        custom: "4px 36px 36px -7px rgba(0,0,0,0.77)",
      },
    },
  },
  plugins: [],
};
