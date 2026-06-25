/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        site: {
          DEFAULT: '#0B0D12',
          surface: '#11141C',
          raised: '#161A24',
          border: '#232838',
        },
        ink: {
          DEFAULT: '#E8EAF0',
          muted: '#9AA1B2',
          faint: '#5C6378',
        },
        accent: {
          violet: '#7C5CFF',
          cyan: '#3DD6F5',
          coral: '#FF6B6B',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
        'mesh-violet': 'radial-gradient(at 20% 20%, rgba(124,92,255,0.25) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(61,214,245,0.18) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(124,92,255,0.12) 0px, transparent 50%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'tick': 'tick 1.8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        tick: {
          '0%, 100%': { opacity: 0.3, transform: 'scaleY(0.6)' },
          '50%': { opacity: 1, transform: 'scaleY(1)' },
        },
      },
    },
  },
  plugins: [],
}
