import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: 'oklch(97% 0.011 90 / <alpha-value>)',
          2: 'oklch(93.5% 0.014 88 / <alpha-value>)',
          3: 'oklch(89% 0.016 85 / <alpha-value>)',
        },
        ink: {
          DEFAULT: 'oklch(21% 0.018 60 / <alpha-value>)',
          2: 'oklch(34% 0.018 58 / <alpha-value>)',
          3: 'oklch(47% 0.02 62 / <alpha-value>)',
          4: 'oklch(60% 0.016 65 / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'oklch(66% 0.19 28 / <alpha-value>)',
          ink: 'oklch(44% 0.165 26 / <alpha-value>)',
          soft: 'oklch(66% 0.19 28 / 0.13)',
        },

      },
      fontFamily: {
        display: ['Khand', 'system-ui', 'sans-serif'],
        sans: ['Archivo', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        control: '10px',
        card: '14px',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'slide-up': 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
