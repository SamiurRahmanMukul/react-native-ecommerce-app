/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'font-poppins-thin': 'Poppins-Thin',
        'font-poppins-light': 'Poppins-Light',
        'font-poppins-regular': 'Poppins-Regular',
        'font-poppins-medium': 'Poppins-Medium',
        'font-poppins-semibold': 'Poppins-SemiBold',
        'font-poppins-bold': 'Poppins-Bold',
      },
    },
  },
  plugins: [],
};
