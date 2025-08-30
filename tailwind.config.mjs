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
          400: '#facc15',
          500: '#eab308'
        },
        textSecondary: {
          DEFAULT: 'var(--text-secondary)',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a'
        }
      },
      borderRadius: {

        DEFAULT: '0.25rem',
        sm: '0.25rem',
        lg: '0.5rem',
        full: '9999px'

      }
    }
  },
  plugins: []
}
