import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#2C7DFA",
        grey: "#7D889E",
        "dark-navy": "#1F314F",
        "light-grey": "#D5E1EF",
        "shade-blue": "#3685FF",
      },
      boxShadow: {
        card: "0px 25px 25px 0px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        card: "20px",
        image: "10px",
      },
      maxWidth: {
        card: "20rem",
      },
      fontSize: {
        title: ["1.375rem", { lineHeight: "1.8rem" }],
        content: [
          "0.9375rem",
          { letterSpacing: "0.01175rem", lineHeight: "1.2rem" },
        ],
      },
      fontFamily: {
        outfit: ["var(--font-outfit)"],
      },
    },
  },
  plugins: [],
};
export default config;
