/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        quest: {
          navy: '#0B1426',
          deep: '#111D35',
          blue: '#1E3A5F',
          glow: '#F6C547',
          gold: '#FFDE7A',
          amber: '#FF9F43',
          mint: '#4ECDC4',
          coral: '#FF6B6B',
          purple: '#A78BFA',
          sky: '#7DD3FC',
          white: '#F8FAFC',
          muted: '#94A3B8',
        },
      },
      fontFamily: {
        display: ['Fredoka', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'pop': 'pop 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'shake': 'shake 0.5s ease-in-out',
        'star-spin': 'star-spin 0.6s ease-out',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(246, 197, 71, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(246, 197, 71, 0.6)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'pop': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-8px)' },
          '75%': { transform: 'translateX(8px)' },
        },
        'star-spin': {
          '0%': { transform: 'scale(0) rotate(0deg)' },
          '100%': { transform: 'scale(1) rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
