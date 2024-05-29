/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
    darkMode: 'class',
  theme: {
      colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'white': '#ffffff',
          'black': '#252525',
          'gray': '#e1e1e1',
          'dark-gray': '#484848',
          'orange': {
              300: '#fcd34d',
              400: '#fbbf24',
              500: '#fcb20f',
              600: '#ea580c'
          },
          'red': '#f83030',
          'green': '#88fa2a'
      },
      fontFamily: {
        Mont: ["Montserrat", 'sans-serif']
      },
      extend: {
          spacing: {
              '45': '45%',
              '55%': '55%'
          },
          keyframes: {
              'modal-in': {
                  from: {opacity: 0},
                  to: {opacity: 1}
              },
              'modal-out': {
                  from: {opacity: 1},
                  to: { opacity: 0}
              },
              'notification-in': {
                  from: { marginBottom: '-50px'},
                  to: {marginBottom: '40px'}
              },
              'notification-out': {
                  from: {marginBottom: '40px'},
                  to: { marginBottom: '-50px'}
              }
          },
          animation: {
              'modal-in': 'modal-in 0.2s ease-out forwards',
              'modal-out': 'modal-out 0.2s ease-out forwards',
              'notification-in': 'notification-in 0.8s ease-out forwards',
              'notification-out': 'notification-out 0.8s ease-out forwards',
          }
        },
  },
  plugins: [],
}

