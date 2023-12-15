const BREAKPOINTS = {
  md: 768,
  lg: 960,
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        lg: {
          min: `${BREAKPOINTS.md + 1}px`,
          max: `${BREAKPOINTS.lg}px`,
        },
        md: {
          max: `${BREAKPOINTS.md}px`,
        },
      },
      colors: {
        primary: {
          DEFAULT: "#1DE897",
          hover: "#0CF99B",
        },
        secondary: "#181B1E",
      },
    },
  },
  plugins: [],
};
