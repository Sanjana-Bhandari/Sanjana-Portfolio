/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
        },
        accent: { 400: '#22d3ee', 500: '#06b6d4' },
        ink: { 900: '#0b0b1a', 800: '#12122a', 700: '#1b1b3a' },
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(30px,-40px) scale(1.15)' },
          '66%': { transform: 'translate(-25px,25px) scale(0.9)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blink: { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0 } },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        blob: 'blob 12s ease-in-out infinite',
        gradient: 'gradientShift 6s ease infinite',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
};
