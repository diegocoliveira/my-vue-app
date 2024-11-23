/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Inclua arquivos Vue e JS/TS
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["dark"], // Escolha os temas
  },
};
