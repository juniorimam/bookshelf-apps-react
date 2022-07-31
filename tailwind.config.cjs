/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins"],
    },
    extend: {
      fontFamily: {
        sans: ['"Inter"'],
      },
      colors: {
        primary: "#0a61e4",
        secondary: "#858d9a",
        btGreen: "#08ba76",
        btRed: "#f12764",
      },
    },
  },
  plugins: [],
};
