/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#ff4b2b',
        secondary: '#ff416c',
        dark: '#333',
        light: '#fff',
        gray: '#f5f5f5',
      },
      boxShadow: {
        coustom: '0 2px 10px rgba(0, 0, 0, 0.1)'

      }
    },
  },
  plugins: [],
}

