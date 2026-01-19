/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Coolors palette: https://coolors.co/palette/cfdbd5-e8eddf-f5cb5c-242423-333533
        cream: '#E8EDDF',
        sage: '#CFDBD5',
        gold: '#F5CB5C',
        charcoal: '#333533',
        dark: '#242423',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}