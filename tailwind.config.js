/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',           
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bonzai: ['var(--font-bonzai)', 'sans-serif'],
      },
      colors: {
        main: 'var(--color-main-text)',
        secondarybg: 'var(--color-secondary-bg)'
      }
    },
  },
  plugins: [],
}
