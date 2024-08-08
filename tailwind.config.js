/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FCF7F7",
        secondary: {
          default: "#FF4240",
          dark: "#4D4D4D",
        },
        white: "#FFFFFF",
        greenizi: "#2AD2C9",
        header: "#FF4240", 
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        arial: ["Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
