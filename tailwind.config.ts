import type { Config } from "tailwindcss";

export default {
  // Scan src/components directory for styles
  content: ["./src/components/**/*.{ts,tsx}"],

  // Theme colors based on figma
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      green: "#006F62",
      brown: "#5A3A27",
      black: "#1D1F22",
      red: "#B3261E"
    }
  },

  plugins: [],
} satisfies Config;
