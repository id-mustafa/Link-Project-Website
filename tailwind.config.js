/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}', // (Optional) In case you have a layouts directory
  ],
  theme: {
    extend: {
      // Keyframe Animations
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: { // Example of another animation
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      // Animations
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-in-out forwards',
        'fade-in-down': 'fadeInDown 0.5s ease-in-out forwards',
      },

      // Custom Fonts
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },

      // Font Sizes
      fontSize: {
        'xxs': '10px',
        'xxxs': '8px',
      },

      // Custom Colors
      colors: {
        'primary-red': '#FF0000',
      },
    },
  },
  plugins: [],
}
