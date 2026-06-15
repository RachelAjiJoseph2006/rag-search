/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        zoomInOut: {
          "0%": { transform: "scale(12)", opacity: "0", filter: "blur(10px)" },
          "40%": { opacity: "1", filter: "blur(0px)" },
          "70%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(0.8)", opacity: "0", filter: "blur(4px)" },
        },
      },
      animation: {
        zoomInOut: "zoomInOut 2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};