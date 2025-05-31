/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray': {
          800: '#1D1D1D',
          900: '#121212',
        },
        'green': {
          500: '#1dbf73',
          600: '#19a463',
          800: '#013914',
          900: '#002e0e',
        },
        'olive': {
          600: '#446c32',
        },
      },
    },
  },
  plugins: [],
}