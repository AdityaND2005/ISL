/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        seashell: "#fff4ee",
        darkgray: "#9c9c9c",
        royalblue: {
          "100": "#6883f6",
          "200": "#5d7af7",
          "300": "#5775f8",
        },
        lavender: "#d7defd",
        gray: {
          "100": "#838585",
          "200": "#1a1a1a",
          "300": "#151515",
          "400": "#111",
        },
        dimgray: {
          "100": "#616263",
          "200": "#5f6061",
          "300": "#5d5e5f",
          "400": "#515253",
        },
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
    },
    fontSize: {
      "45xl": "64px",
      "5xl": "24px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};