/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./public/assets/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          Atlantis: "#72B626",
          lighter_Atlantis: "#f5fce9",
          Nero: "#FFFFFF",
          Gallery: "#EEEEEE",
          Mine_Shaft: "#333333",
          Silver: "#CCCCCC",
          Emperor:"#555555",
          Overlay: "rgba(0, 0, 0, 0.4)",
          light_Black:"rgba(0, 0, 0, 0.1)",
        },
      },
      fontFamily: {
        bodyFont: ["Poppins, sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
