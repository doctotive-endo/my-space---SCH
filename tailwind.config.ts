import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pixel: {
          wall: '#e0e7ff',
          floor: '#d1d5db',
          wood: '#8B4513',
          woodLight: '#CD853F',
          woodDark: '#654321',
          skin: '#FFE4C4',
          hair: '#3D2314',
          white: '#FFFFFF',
          blue: '#3B82F6',
          gold: '#FFD700',
          silver: '#C0C0C0',
          bronze: '#CD7F32',
        }
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

export default config
