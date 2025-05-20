/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Si usas app directory (Next 13+)
    "./app/**/*.{js,ts,jsx,tsx}",

    // Si usas pages directory (Next 12 o anterior)
    "./pages/**/*.{js,ts,jsx,tsx}",

    // Componentes compartidos
    "./components/**/*.{js,ts,jsx,tsx}",

    // Flowbite (¡necesario!)
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [require("flowbite/plugin")],
};
