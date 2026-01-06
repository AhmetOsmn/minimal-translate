/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['SF Pro Display', 'Segoe UI', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'SF Mono', 'Consolas', 'monospace'],
      },
      colors: {
        'theme': {
          'bg-primary': 'var(--color-bg-primary)',
          'bg-secondary': 'var(--color-bg-secondary)',
          'bg-tertiary': 'var(--color-bg-tertiary)',
          'bg-hover': 'var(--color-bg-hover)',
          'bg-muted': 'var(--color-bg-muted)',
          'text-primary': 'var(--color-text-primary)',
          'text-secondary': 'var(--color-text-secondary)',
          'text-tertiary': 'var(--color-text-tertiary)',
          'text-placeholder': 'var(--color-text-placeholder)',
          'text-muted': 'var(--color-text-muted)',
          'border-primary': 'var(--color-border-primary)',
          'border-secondary': 'var(--color-border-secondary)',
          'border-muted': 'var(--color-border-muted)',
          'card-bg': 'var(--color-card-bg)',
          'card-border': 'var(--color-card-border)',
          'input-bg': 'var(--color-input-bg)',
          'input-border': 'var(--color-input-border)',
          'button-secondary-bg': 'var(--color-button-secondary-bg)',
          'button-secondary-hover': 'var(--color-button-secondary-hover)',
        },
        'accent': {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.15s ease-out',
        'slide-up': 'slideUp 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

