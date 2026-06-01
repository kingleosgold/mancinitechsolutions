import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // near-black base + elevated surfaces
        bg: "#09090A",
        panel: "#0D0D0F",
        elevated: "#111114",
        // single sharp accent (refined amber — complements the mono M mark)
        accent: "#F0B43C",
        "accent-dim": "#5a4716",
        // status only
        online: "#3FB950",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        frame: "1180px",
      },
      letterSpacing: {
        label: "0.18em",
      },
    },
  },
  plugins: [],
};

export default config;
