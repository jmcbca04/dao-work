/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dao: {
          dark: '#0f172a',
          medium: '#1e293b',
          light: '#334155',
          accent: '#3b82f6',
          secondary: '#7c3aed'
        },
        dark: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
          500: '#64748b',
        },
        primary: {
          DEFAULT: '#3b82f6',
          dark: '#1d4ed8',
          light: '#60a5fa',
        },
        accent: {
          purple: '#7c3aed',
          blue: '#2563eb',
          indigo: '#4f46e5',
          pink: '#db2777',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        'card-gradient': 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
        'cta-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        'feature-gradient': 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
        'stat-gradient': 'linear-gradient(135deg, #1e1e29 0%, #27273a 100%)',
        'darkrise-gradient': 'linear-gradient(to right, #1a1a2e, #16213e, #0f3460)',
        'darkrise-accent': 'linear-gradient(to right, #3b82f6, #4f46e5, #7c3aed)',
      },
      boxShadow: {
        'darkrise': '0 10px 30px -5px rgba(2, 12, 27, 0.7)',
        'darkrise-sm': '0 10px 20px -5px rgba(2, 12, 27, 0.5)',
        'darkrise-lg': '0 20px 40px -5px rgba(2, 12, 27, 0.8)',
        'darkrise-accent': '0 10px 20px -5px rgba(59, 130, 246, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-left': 'slideLeft 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
        'bounce-sm': 'bounceSm 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceSm: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        daowork: {
          "primary": "#3b82f6",
          "secondary": "#7c3aed",
          "accent": "#4f46e5",
          "neutral": "#0f172a",
          "base-100": "#0f172a",
          "base-200": "#1e293b",
          "base-300": "#334155",
          "info": "#3abff8",
          "success": "#22c55e",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      },
      "light",
      "dark",
    ],
    darkTheme: "daowork",
  },
} 