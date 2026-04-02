import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#E85C0D",
          ember: "#ff8e4d",
          black: "#1A1A1A",
          coal: "#0B0B0B",
          steel: "#292929",
          fog: "#D6D6D6",
          white: "#FFFFFF"
        }
      },
      boxShadow: {
        glow: "0 20px 60px rgba(232, 92, 13, 0.24)",
        panel: "0 20px 50px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        "grid-radial":
          "radial-gradient(circle at 20% 20%, rgba(232, 92, 13, 0.22), transparent 30%), radial-gradient(circle at 80% 0%, rgba(255, 255, 255, 0.08), transparent 22%), linear-gradient(135deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.01) 100%)"
      }
    }
  },
  plugins: []
};

export default config;
