/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      md: '640px',
      lg: '1024px',
    },
    extend: {
      backgroundImage: {
        'bgimg': "url('/public/trianglify-lowres.png')",
      }
    },
  },
  plugins: [],
}

