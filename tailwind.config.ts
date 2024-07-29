/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1600px',
      },
    },
    backgroundImage: {
      gun: 'url(/assets/img/intro/gun.svg)',
    },
    extend: {
      screens: {
        'xs': '400px',
        'xxs': '320px',
      },
      colors: {
        background: '#0E0D13',
        action: '#121117',
        hover: '#0e4bf1',
      }
    },
  },
  plugins: [],
}