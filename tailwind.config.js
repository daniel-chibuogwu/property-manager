/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        grey: {
          DEFAULT: '#F2F2F2',
          4: '#CCCCCC',
          5: '#5F5B5B',
          8: '#616165',
          9: '#787373',
          10: '#6D6767',
        },
        'light-teal': '#E5F4F3',
        'dark-teal': '#1293A9',
        'dark-purple': '#3F3D56',
      },
      fontSize: {
        xxs: ['10px', '12px'],
      },
      borderRadius: {
        7: '7px',
      },
      fontFamily: {
        'roboto-400': ['Roboto-Regular', 'sans-serif'],
        'roboto-500': ['Roboto-Medium', 'sans-serif'],
        'roboto-700': ['Roboto-Bold', 'sans-serif'],
        'mono-400': ['PTMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
};
