/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
    theme: {
      extend: {
        screens: {
          'sm': {'max': '767px'},
          'md': {'min': '768px', 'max': '1023px'},
          'lg': {'min': '1024px', 'max': '1279px'},
          'xl': {'min': '1280px', 'max': '1535px'},
          '2xl': {'min': '1536px'},
        },
        fontFamily:{
          rubik:['Rubik','sans-serif'],
          raleway:['Raleway','sans-serif']
        },
      },
    },
  plugins: [],
}

