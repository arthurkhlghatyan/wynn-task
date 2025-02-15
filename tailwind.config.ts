import type { Config } from 'tailwindcss';

export default {
  // Scan src/components directory for styles
  content: ['./src/components/**/*.{ts,tsx}'],

  // Theme colors based on figma
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      white: '#FFFFFF',

      green: '#006F62',
      brown: '#5A3A27',
      black: '#1D1F22',
      gray: '#F7F7F7',
      red: '#B3261E',

      darkGray: '#E8E9E9',
      lightGray: '#667085',
      placeholderGray: '#999999'
    },
  },

  plugins: [],
} satisfies Config;
