const { PureComponent } = require('react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        Jakarta: ["Jakarta", "sans-serif"],
        JakartaBold: ["Jakarta-Bold", "sans-serif"],
        JakartaExtraBold: ["Jakarta-ExtraBold", "sans-serif"],
        JakartaExtraLight: ["Jakarta-ExtraLight", "sans-serif"],
        JakartaLight: ["Jakarta-Light", "sans-serif"],
        JakartaMedium: ["Jakarta-Medium", "sans-serif"],
        JakartaSemiBold: ["Jakarta-SemiBold", "sans-serif"],
      },
      colors: {
        primary: {
          500: '#624CF5',
          50: ' #F6F8FD',
          DEFAULT: '#624CF5',
          foreground: 'hsl(var(--primary-foreground))',
        },
        coral: {
          500: '#15BF59',
        },

        grey: {
          600: '#545454', // Subdued - color name in figma
          500: '#757575',
          400: '#F4F2F2', // Disabled - color name in figma
          50: '#E7E7E3', // White Grey - color name in figma
        },
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        purple : {
          100 : "#6300cc",
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          60 : '#1E1E1E',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
          90 : '#003F62'
        },
        yellow: {
          50: '#FEC601',
        },
        brown : {
          10: '#fef3c7',
          50 : '#A2783A',
          30 : 'rgba(0, 0, 0, 0.25)',
          80 : '#713f12',
        },
        black : {
          100 : '#000',
          90 : "#262521"

        },
        slate : {
          200 : '#e2e8f0',
        },

        red : {
          500 : '#ef4444',
        },
        white: '#FFFFFF',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        foreground: 'hsl(var(--foreground))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
      },
    },
  },
  plugins: [],
};


