/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./contact/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "sansum-blue": "#1e3c8a",
        "sansum-red": "#e40010",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
