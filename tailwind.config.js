/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        yellow: {
          500: "#F4D04E",
        },
        gray: {
          500: "#6B6B6B",
          950: "#111111",
        },
      },
      fontFamily: {
        figtree: ["Figtree", "serif"],
      },
    },
  },
};
