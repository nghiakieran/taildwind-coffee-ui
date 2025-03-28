/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Karla: [
          'Karla',
          'san-serif'
        ]
      },
      colors: {
        'coffee': {
          '50': '#a25f4b33',
          '200': '#C89F94',
          '400': '#a25f4b'
        }
          
      },
      maxWidth: {
        '1440': '1440px', 
        '940': '940px'
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        }
      },
      animation: {
        slideDown: 'slideDown .5s ease-in-out',
        fadeIn: 'fadeIn .5s ease-in-out',
      },
      screens: {
        'mobile': '375px',
        'xs': '480px'
      }
    },
  },
  plugins: [],
}

