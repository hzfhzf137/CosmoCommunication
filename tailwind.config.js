/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100%)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        spin: {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          }
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }
        }
      },
      // Custom animations using the keyframes
      animation: {
        slideInLeft: 'slideInLeft 0.8s ease-out',
        spin: 'spin 1s linear 1',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      textStrokeWidth: {
        '2': '2px',
      },
      textStrokeColor: {
        'black': '#000',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke-width': 'var(--tw-text-stroke-width, 1px)',
          '-webkit-text-stroke-color': 'var(--tw-text-stroke-color, black)'
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}
