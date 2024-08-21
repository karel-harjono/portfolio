import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        primary: "#222831",
        secondary: "#101010",
        tertiary: "#161b22",
        quaternary: "#161b22",
        navbar: "#393E46",
      },
      textColor: {
        primary: "#e5e7eb",
        secondary: "#9CA3AF",
        tertiary: "#6b7280",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
