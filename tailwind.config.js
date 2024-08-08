/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FCF7F7",
        secondary: {
          DEFAULT: "#E0E0E0",
          dark: "#4D4D4D",
        },
        white: "#FFFFFF",
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
