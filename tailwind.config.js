/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'afacad-flux': ['"Afacad Flux"', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "pink-950": "#4b0013", // Sizga kerak bo‘lgan rang kodini kiriting
      },
    },
  },
  plugins: [
    require('daisyui'),
  ]
};
