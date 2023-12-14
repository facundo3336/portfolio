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
        'spainFlag': "url('./spain_flag.png')",
        'ukFlag': "url('./uk_flag.jpg')"
      },
      colors: {
        'transparent-black': "rgba(0, 0, 0, 0.5)",
        'primary': '#5c546b',
        'violet': '#CDBCEB',
        'strongViolet': '#8E82A4',
        'strongerViolet': '#292D44'
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
        },
        float: {
          '0%': {
            boxShadow: '0 5px 15px 0px rgba(0,0,0,0.6)',
            transform: 'translatey(0px)'
          },
          '50%': {
            boxShadow: '0 25px 15px 0px rgba(0,0,0,0.2)',
            transform: 'translatey(-20px)'
          },
          '100%': {
            boxShadow: '0 5px 15px 0px rgba(0,0,0,0.6)',
            transform: 'translatey(0px)'
          }
        },
        scrollLeft: {
          '0%': {
            transform: 'translateX(0%)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          }
        },
        scrollRight: {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(0%)'
          }
        },
        swing: {
          '0': {
            transform: 'rotate(0deg)'
          },
          '50%': {
            transform: 'rotate(5deg)'
          },
          '100%': {
            transform: 'rotate(0deg)'
          }
        },
        morph: {
          '0%, 100%': {
            borderRadius: '40% 60% 70% 30%/40% 40% 60% 50%'
          },
          '34%': {
            borderRadius: '70% 30% 50% 50%/30% 30% 70% 70%'
          },
          '67%': {
            borderRadius: '100% 60% 60% 100%/100% 100% 60% 60%'
          },
        },
        fadeInLeft: {
          '0%': {
             opacity: '0',
             transform: 'translateX(-40px)'
          },
          '100%': {
             opacity: '1',
             transform: 'translateX(0)'
          }
        },
        fadeInRight: {
          '0%': {
             opacity: '0',
             transform: 'translateX(40px)'
          },
          '100%': {
             opacity: '1',
             transform: 'translateX(0)',
          }
        },
        fadeIn: {
          '0%': {
             opacity: '0',
          },
          '50%': {
            opacity: '.5'
          },
          '100%': {
             opacity: '1',
          }
        } ,
        zoom: {
          '0%': {
            backgroundSize: '110% 110%'
          },
          '100%': {
            backgroundSize: '100% 100%'
          }
        }          
      },
      animation: {
        rubberband: 'rubberband 0.8s ease-out',
        float: 'float 6s ease-in-out infinite',
        scrollLeft: 'scrollLeft 13s linear infinite',
        scrollRight: 'scrollRight 13s linear infinite',
        swing: 'swing 1s linear infinite',
        morph: 'morph 3.6s linear infinite',
        fadeInLeft: 'fadeInLeft 1s',
        fadeInRight: 'fadeInRight 1s',
        fadeIn: 'fadeIn .7s',
        zoom: 'zoom .5s'
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