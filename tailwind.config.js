/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          light: "var(--bl-palette-primary-light)",
          DEFAULT: "var(--bl-palette-primary-main)",
          dark: "var(--bl-palette-primary-dark)",
        },
        secondary: {
          light: "var(--bl-palette-secondary-light)",
          DEFAULT: "var(--bl-palette-secondary-main)",
          dark: "var(--bl-palette-secondary-dark)",
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
