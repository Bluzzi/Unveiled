import { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      "sans": ["Inter", "sans-serif"]
    },

    colors: {
      "transparent": "transparent",

      "white": "white",
      "black": "black",

      "primary": {
        DEFAULT: "#134D6B",
        2: "#15425A",
        3: "#15425A"
      },

      "red": "#FF5555"
    },

    fontSize: {
      "sm": "0.8rem",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "2xl": "1.5rem",
      "3xl": ["2rem", { lineHeight: "1" }]
    },

    screens: {
      "2xl": { "max": "1535px" },
      "xl": { "max": "1279px" },
      "lg": { "max": "1023px" },
      "md": { "max": "767px" },
      "sm": { "max": "639px" }
    },

    borderRadius: {
      none: "0px",
      DEFAULT: "0.5rem",
      full: "9999px"
    },

    boxShadow: {
      DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
    },

    extend: {
      backgroundImage: {
        "tray": "url('/background.png')"
      },

      transitionProperty: {
        "max-height": "max-height",
        "max-width": "max-width"
      }
    }
  },

  plugins: []
} satisfies Config;