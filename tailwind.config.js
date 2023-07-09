/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['aeonik']
      },
      screens: {
        'lg': '1191px',
      },
      backgroundColor: {
        'background': '#fefef6', // Replace with your custom color code
        'yellow': '#FFF1BB',
        'main-red': '#FE5150',
      },
    },
  },
  plugins: [],
}

