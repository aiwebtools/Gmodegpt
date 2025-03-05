
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        cyberpunk: {
          "neon-blue": "#00FFFF",
          "neon-purple": "#9D00FF",
          "neon-pink": "#FF00F5",
          "deep-blue": "#0A1128",
          "dark-bg": "#0F0F1A",
          "darker-bg": "#060611",
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/grid-pattern.png')",
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "cyberpunk-gradient": "linear-gradient(45deg, #00FFFF, #9D00FF, #FF00F5)",
      },
      boxShadow: {
        neon: "0 0 5px theme('colors.cyberpunk.neon-blue'), 0 0 20px theme('colors.cyberpunk.neon-blue')",
        "neon-purple": "0 0 5px theme('colors.cyberpunk.neon-purple'), 0 0 20px theme('colors.cyberpunk.neon-purple')",
        "neon-pink": "0 0 5px theme('colors.cyberpunk.neon-pink'), 0 0 20px theme('colors.cyberpunk.neon-pink')",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 5px rgba(0, 255, 255, 0.7), 0 0 10px rgba(0, 255, 255, 0.5)"
          },
          "50%": { 
            boxShadow: "0 0 15px rgba(0, 255, 255, 0.9), 0 0 20px rgba(0, 255, 255, 0.7)"
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "text-glow": {
          "0%, 100%": { textShadow: "0 0 4px rgba(0, 255, 255, 0.6), 0 0 8px rgba(157, 0, 255, 0.4)" },
          "50%": { textShadow: "0 0 8px rgba(0, 255, 255, 0.8), 0 0 12px rgba(157, 0, 255, 0.6)" },
        },
        "rotate-slow": {
          "100%": { transform: "rotate(360deg)" },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 3s infinite",
        "float": "float 6s ease-in-out infinite",
        "text-glow": "text-glow 2s ease-in-out infinite",
        "rotate-slow": "rotate-slow 12s linear infinite",
        "gradient-x": "gradient-x 3s ease infinite",
      },
      fontFamily: {
        'cyberpunk': ['Inter', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
