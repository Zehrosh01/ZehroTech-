/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#5DFF8F',
        'neon-blue': '#00E0FF',
        'dark-bg': '#0A0F1F',
        'dark-secondary': '#111827',
        'dark-accent': '#1a1f35',
        'gray-text': '#9CA3AF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neon-green': '0 0 20px rgba(93, 255, 143, 0.5)',
        'neon-blue': '0 0 20px rgba(0, 224, 255, 0.5)',
        'neon-mix': '0 0 30px rgba(93, 255, 143, 0.3), 0 0 40px rgba(0, 224, 255, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 5px rgba(93, 255, 143, 0.5))' },
          '100%': { filter: 'drop-shadow(0 0 20px rgba(93, 255, 143, 0.8))' },
        },
      }
    },
  },
  plugins: [],
}
