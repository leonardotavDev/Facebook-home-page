/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "background-facebook": "#f0f2f5",
        "color-font-facebook": "#0866ff",
        "button-color": "#42b72a",
        "hover-button": "#36a420",
      },
      width: {
        580: "36.25rem",
        500: "31.25rem",
        400: "400px",
      },
      height: {
        116: "7.25rem",
      },
    },
  },
  plugins: [],
};
