/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  purge: {
    enabled: process.env.NODE_ENV === "production", // Enable purging only in production
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  },
  theme: {
    extend: {
      colors:{
        "Sred":"#d20907",
        "sblue":"#0d44a7"
      },
    },
  },
  plugins: [],
}
