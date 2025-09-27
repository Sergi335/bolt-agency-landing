/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: '#000000',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04'
        },
        secondary: {
          DEFAULT: 'var(--text-secondary)',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a'
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          50: 'var(--chakra-colors-teal-50)',
          100: 'var(--chakra-colors-teal-100)',
          200: 'var(--chakra-colors-teal-200)',
          300: 'var(--chakra-colors-teal-300)',
          400: 'var(--chakra-colors-teal-400)',
          500: 'var(--chakra-colors-teal-500)',
          600: 'var(--chakra-colors-teal-600)',
          700: 'var(--chakra-colors-teal-700)',
          800: 'var(--chakra-colors-teal-800)',
          900: 'var(--chakra-colors-teal-900)',
          950: 'var(--chakra-colors-teal-950)'
        },
        light: {
          DEFAULT: 'var(--chakra-colors-900)',
          600: 'var(--chakra-colors-600)',
          700: 'var(--chakra-colors-700)',
          800: 'var(--chakra-colors-800)',
          900: 'var(--chakra-colors-900)'
        }
      },
      borderRadius: {

        DEFAULT: '0.25rem',
        sm: '0.25rem',
        lg: '0.5rem',
        full: '9999px'

      },
      padding: {
        section: 'var(--section-spacing)'
      },
      animation: {
        'fade-in': 'fade-in 0.2s ease-in',
        'fade-out': 'fade-out 0.3s ease-out',
        'slide-in-top': 'slide-in-top 0.1s ease-out'
      },
      keyframes: {
        'fade-in': {
          '0%': {
            'opacity': '0'
          },
          '100%': {
            'opacity': '1'
          }
        },
        'fade-out': {
          '0%': {
            'opacity': '1'
          },
          '100%': {
            'opacity': '0'
          }
        },
        'slide-in-top': {
          '0%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0)' }
        }
      }
    }
  }
}
