import type { Config } from "tailwindcss";

import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        scribble: ["Rubik Scribble", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        fade: "fadeIn 1s ease-in-out",
        blink: "blink 2s infinite",
      },
      flex: {
        ["2"]: "2",
        ["3"]: "3",
        ["4"]: "4",
        ["5"]: "5",
        ["6"]: "6",
        ["7"]: "7",
        ["8"]: "8",
      },

      keyframes: {
        blink: {
          "0%": { opacity: "1" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeOut: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    plugin(function ({ addUtilities, matchUtilities, theme }) {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      ),
        addUtilities({
          ".drag-none": {
            "-webkit-user-drag": "none",
            "-khtml-user-drag": "none",
            "-moz-user-drag": "none",
            "-o-user-drag": "none",
            "user-drag": "none",
          },
        });
    }),
  ],
};
export default config;
