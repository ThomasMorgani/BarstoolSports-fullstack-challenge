import colors from 'tailwindcss/colors'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        accent: '#facc15',
        primary: '#010c1d',
        'away-team': '#dc2626',
        'home-team': '#1e3a8a',
      },
      fontSize: {
        '2xs': ['0.5rem', '0.75rem'],
        '3xs': ['0.25rem', '0.5rem'],
      },
    },
  },
  plugins: [],
}
