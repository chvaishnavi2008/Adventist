/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f9',
          100: '#e1e9f2',
          200: '#c3d3e6',
          300: '#94b3d3',
          400: '#5e8ebe',
          500: '#386fa8',
          600: '#28568c',
          700: '#204572',
          800: '#17365c',
          900: '#0c2340', // Primary deep navy
          950: '#071629',
        },
        health: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9', // Healthcare vibrant blue
          600: '#0284c7', // Healthcare blue primary
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        sdaGreen: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        sdaAmber: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(12, 35, 64, 0.08)',
        'card-hover': '0 12px 30px -4px rgba(12, 35, 64, 0.15)',
      }
    },
  },
  plugins: [],
}
