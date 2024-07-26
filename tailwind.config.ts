import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      gun: 'url(/assets/img/intro/gun.svg)',
    },
    extend: {
      colors: {
        background: '#0E0D13'
      }
    },
  },
  plugins: [],
};
export default config;
