/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        md: '1050px',
        sm: '500px'
      },
      fontFamily: {
        sora: ["Sora", "serif"],
      },
    },
  },
  plugins: [],
};
