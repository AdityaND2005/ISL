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
          "500": "#0b0b0b",
        },
        aliceblue: "rgba(237, 250, 255, 0.5)",
        dimgray: {
          "100": "#616263",
          "200": "#5f6061",
          "300": "#5d5e5f",
          "400": "#515253",
        },
        snow: "#fff5f5",
        white: "#fff",
        lavenderblush: "#ffefef",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "zen-kaku-gothic-new": "'Zen Kaku Gothic New'",
        "dm-sans": "'DM Sans'",
        cookie: "Cookie",
      },
    },
    fontSize: {
      "sm-5": "13.5px",
      mini: "15px",
      xl: "20px",
      base: "16px",
      "45xl": "64px",
      "19xl": "38px",
      "32xl": "51px",
      "5xl": "24px",
      "109xl": "128px",
      "13xl": "32px",
      "29xl": "48px",
      "10xl": "29px",
      inherit: "inherit",
    },
    screens: {
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};