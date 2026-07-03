/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: 'var(--seed-ink)',
        paper: 'var(--seed-paper)',
        vermilion: 'var(--seed-vermilion)',
        celadon: 'var(--seed-celadon)',
        gold: 'var(--seed-gold)',
        surface: 'var(--seed-surface)',
        'surface-muted': 'var(--seed-surface-muted)',
        accent: 'var(--seed-accent)',
      },
      fontFamily: {
        display: 'var(--font-display)',
        body: 'var(--font-body)',
      },
    },
  },
  plugins: [],
}
