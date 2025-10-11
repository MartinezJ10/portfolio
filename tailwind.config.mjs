// tailwind.config.mjs
export default {
  content: ["./src/**/*.{astro,html,js,ts,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        light: "var(--color-light)",
        dark: "var(--color-dark)",
        bg: "var(--color-bg)",
      },
    },
  },
  plugins: [],
};
