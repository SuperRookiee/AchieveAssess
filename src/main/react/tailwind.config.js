/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    //tailwind
    "./src/**/*.{js,ts,jsx,tsx}",
    //Flowbite
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Noto Sans KR', 'sans-serif'],
      },
    },
    colors: {
      primary: {
        100: '#2f538c',
      },
      first: {
        100: '#79a8ff',
        200: '#6c9deb',
        300: '#8189db',
      },
      second: {
        100: '#299aa4',
      },
      third: {
        100: '#555d64',
        200: '#3b434a',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  // important: true,
}

