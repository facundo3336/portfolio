/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dots-background': "url('/background.png')",
      },
      colors: {
        'transparent-black': "rgba(0, 0, 0, 0.5)",
        'primary': '#5c546b',
        'violet': '#CDBCEB',
        'strongViolet': '#8E82A4',
      },
      fontFamily: {
        'retro': ['Pixelify Sans'],
       
      },
      container: {
        padding: {
          DEFAULT: '2rem',
          sm: '4rem',
          lg: '6rem',
          xl: '8rem',
          '2xl': '10rem',
        },
      },
      fontSize: {
        xxl: '10rem'
      },
      keyframes: {
        rubberband: {
          '0%': { transform: 'scale(1)' },
          '40%': { transform: 'scale(1.12, .75)' },
          '55%': { transform: 'scale(.85, 1)' },
          '65%': { transform: 'scale(1.09, .85) ' },
          '75%': { transform: 'scale(.9, 1)' },
          '90%': { transform: 'scale(1.05, .95)' },
          '100%': { transform: 'scale(1, 1)' }
        }
      },
      animation: {
        rubberband: 'rubberband 0.8s ease-out',
      },
      dropShadow: {
        'text-shadow-sm': '0 0 5rem rgba(41, 45, 68, 1)',
        'text-shadow': '0 0 3rem rgba(41, 45, 68, 1)',
        'text-shadow-strong-sm': '0 0 5rem rgba(41, 45, 68, 1)',
        'text-shadow-strong': '0 0 3rem rgba(41, 45, 68, 1)'
      }
    },
  },
  plugins: [],
}