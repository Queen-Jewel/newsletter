/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: "376px",
      md: "768px",
      lg: "1440px",
    },
    extend: {colors: {
      Tomato: 'hsl(4, 100%, 67%)',
      DarkGrey: 'hsl(234, 29%, 20%)',
      CharcoalGrey: 'hsl(235, 18%, 26%)',
      Grey: 'hsl(231, 7%, 60%)',
      White: 'hsl(0, 0%, 100%)',
      Pink:'#ff5474',
      Orange:'#ff6742',
    },
    fontFamily: {
      robo:['Roboto'],
    }},
  },
  plugins: [],
}

