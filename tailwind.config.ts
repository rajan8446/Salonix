import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // next-ui
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      brand: {
        50: "#fdf3f3",
        100: "#fbe8e9",
        200: "#f6d5d7",
        300: "#eeb3b6",
        400: "#e4888f",
        500: "#d65d6a",
        600: "#c03e52",
        700: "#9c2d41",
        800: "#88293d",
        900: "#752639",
        950: "#40111b",
      },
      dark: {
        50: "#f4f5f7",
        100: "#e3e5ea",
        200: "#cacdd7",
        300: "#a4a8bc",
        400: "#787d98",
        500: "#5d627d",
        600: "#50526a",
        700: "#454759",
        800: "#3d3e4d",
        900: "#363643",
        950: "#070709",
      },
      warning: {
        50: "#fffbea",
        100: "#fff2c5",
        200: "#ffe585",
        300: "#ffd146",
        400: "#ffbc1b",
        500: "#ff9800",
        600: "#e27100",
        700: "#bb4c02",
        800: "#983a08",
        900: "#7c300b",
        950: "#481700",
      },
      error: {
        50: "#fef2f2",
        100: "#fee3e2",
        200: "#fecbca",
        300: "#fba8a6",
        400: "#f77572",
        500: "#ef5350",
        600: "#db2a27",
        700: "#b8201d",
        800: "#981e1c",
        900: "#7e201e",
        950: "#450b0a",
      },
      success: {
        50: "#f3faf3",
        100: "#e3f5e3",
        200: "#c8eac9",
        300: "#9dd89f",
        400: "#6bbd6e",
        500: "#4caf50",
        600: "#358438",
        700: "#2d6830",
        800: "#275429",
        900: "#224525",
        950: "#0e2510",
      },
      heading:{
        50:"#773F25"
      },
      transparent: "transparent",
    },
    fontFamily: {
      sans: ["Italiana", "serif"],
      lato: ["lato", "serif"]
    },
    extend: {
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
        appear: "appear 0.2s linear",
        blob: "blob 7s infinite",
        // accordion
        accordionDown: "accordion-down 0.2s ease-out",
        accordionUp: "accordion-up 0.2s ease-out",
      },
      scale: {
        101: "1.01",
        102: "1.02",
        103: "1.03",
        104: "1.04",
        106: "1.06",
        107: "1.07",
        108: "1.08",
        109: "1.09",
      },
      keyframes: {
        appear: {
          "0%": {
            width: "0",
          },
          "100%": {
            width: "100%",
          },
        },
        blob: {
          "0%": {
            transform: "translate(10px,0px)",
            filter: "blur(140px)",
          },
          "50%": {
            transform: "translate(0px,-20px)",
            filter: "blur(100px)",
          },
          "100%": {
            transform: "translate(0px,10px)",
            filter: "blur(140px)",
          },
        },
        meteor: {
          "0%": {
            transform: "rotate(215deg) translateX(0)",
            opacity: "1",
          },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        // accordion
        accordionDown: {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        accordionUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      boxShadow: {
        gpt: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        "gpt-background": "0px 0px 10.211px 0px rgba(13, 35, 236, 0.33)",
        brand: "0px 0px 10px 0px rgba(86, 155, 255, 0.3)",
        dark: "0px 0px 10px 0px rgba(29, 38, 59, 0.4)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {}, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {}, // dark theme colors
        },
        // ... custom themes
      },
    }),
  ],
};
export default config;
