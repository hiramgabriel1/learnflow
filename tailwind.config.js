/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(37 197 94)',
        background: '#090d0f',
        secondary: '#ffffff'
      }
    }
  },
  plugins: []
};