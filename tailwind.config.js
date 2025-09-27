/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
      },
      colors: {
        electric: {
          blue: '#00f5ff',
          purple: '#8b5cf6',
          pink: '#ec4899',
          cyan: '#06b6d4',
        },
        neon: {
          green: '#39ff14',
          yellow: '#ffff00',
          orange: '#ff6600',
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glitch': 'glitch 1s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          from: { textShadow: '0 0 20px #00f5ff' },
          to: { textShadow: '0 0 30px #00f5ff, 0 0 40px #00f5ff' },
        },
        glitch: {
          '2%': { transform: 'translate(2px,0) skew(0deg)' },
          '4%': { transform: 'translate(-2px,0) skew(0deg)' },
          '6%': { transform: 'translate(0,0) skew(0deg)' },
        }
      }
    },
  },
  plugins: [],
}