/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {screens: {
      xxs: "375px",
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        glow: "glow 2s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 10px #00ffcc" },
          "50%": { boxShadow: "0 0 20px #00ffcc" },
        },
      },
      colors: {
        textPurple: "#7127BA",
        hdbackground: "#1A0B2E",
        darkBg: "#11071F",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
