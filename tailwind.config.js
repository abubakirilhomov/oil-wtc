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
        foreground: "var(--foreground)",
        primaryBlue: "#022465",
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#022465",
          "secondary": "#2563eb",
          "accent": "#4f46e5",
          "neutral": "#1f2937",
          "base-100": "#ffffff", // Дефолтный белый фон
          "info": "#38bdf8",
          "success": "#22c55e",
          "warning": "#facc15",
          "error": "#ef4444",
        },
      },
      "light", // Включает стандартную светлую тему
    ],
  },
};