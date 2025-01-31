/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50",
        secondary: "#FF9800",
        accent: "#9C27B0",
        background: "#F8F9FA",
      },
    },
  },
  plugins: [require("daisyui")],
};
