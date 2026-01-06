/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/renderer/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['SF Pro Display', 'Segoe UI', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'SF Mono', 'Consolas', 'monospace'],
      },
      colors: {
        // Theme colors using CSS variables (defined in globals.css)
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
        // Legacy surface colors (keep for backward compatibility, but prefer theme colors)
        'surface': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
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
        'spin-slow': 'spin 1s linear infinite',
        'check': 'check 0.3s ease-out forwards',
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
        check: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

