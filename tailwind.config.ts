import type { Config } from "tailwindcss";

const config: Config = {
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
        system: {
          purple10: "#ffffff",
          purple15: "#ffffff",
          purple20: "#ffffff",
          purple30: "#ffffff",
          purple40: "#ffffff",
          purple50: "#ffffff",
          purple60: "#ffffff",
          purple65: "#ffffff",
          purple70: "#ffffff",
          purple80: "#ffffff",
          purple90: "#ffffff",
          purple95: "#000000",

          green10: "#ff0000",
          green15: "#ff0000",
          green20: "#ff0000",
          green30: "#ff0000",
          green40: "#ff0000",
          green50: "#ff0000",
          green60: "#ff0000",
          green65: "#ff0000",
          green70: "#ff0000",
          green80: "#ff0000",
          green90: "#ff0000",
          green95: "#ff0000",
          green100: "#ff0000",
        },
      },
    },
  },
  plugins: [],
};
export default config;
