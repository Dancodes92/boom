module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        boom: "#5A4AE3",
        msg: "#C32F27",
      },
    },
    plugins: [
      require("@tailwindcss/forms"),
      require("tailwind-scrollbar"),
      require("tailwind-scrollbar-hide"),
    ],
  },
};
