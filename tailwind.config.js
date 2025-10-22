/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',                           // hỗ trợ dark mode theo class
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      borderRadius: { '2xl': '1rem' },
      boxShadow: {
        soft: '0 8px 24px rgba(0,0,0,0.06)',
        hover: '0 12px 30px rgba(0,0,0,0.10)',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0, transform: 'translateY(6px)' },
                  '100%': { opacity: 1, transform: 'translateY(0)' } },
        pulseBorder: { '0%,100%': { boxShadow: '0 0 0 0 rgba(99,102,241,.4)' },
                       '70%':     { boxShadow: '0 0 0 8px rgba(99,102,241,0)' } },
      },
      animation: {
        fadeIn: 'fadeIn .35s ease-out',
        pulseBorder: 'pulseBorder 1.2s ease-out',
      },
    },
  },
  plugins: [],
}
