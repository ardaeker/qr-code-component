import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "var(--color-blue)",
        gray: "var(--color-gray)",
        white: "var(--color-white)",
        "light-gray": "var(--color-light-gray)",
        "dark-navy": "var(--color-dark-navy)",
        "blue-shade": "var(--color-blue-shade)",
      },
      maxWidth: {
        card: "var(--max-width-card)",
      },
      borderRadius: {
        card: "var(--border-radius-card)",
        "qr-code": "var(--border-radius-qr-code)",
      },
      boxShadow: {
        card: "var(--box-shadow-card)",
      },
    },
  },
  plugins: [],
};
export default config;
