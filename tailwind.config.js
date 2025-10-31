module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#b91c1c', // Red-700
          light: '#fca5a5',   // Red-300
          dark: '#7f1d1d',    // Red-900
        },
        secondary: {
          DEFAULT: '#111827', // Gray-900
          light: '#f3f4f6',   // Gray-100
          dark: '#1f2937',    // Gray-800
        },
        accent: '#b91c1c', // Red-700 as accent color
        background: {
          DEFAULT: '#000000',
          light: '#ffffff',
        },
        error: {
          DEFAULT: '#dc2626', // Red-600
        },
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      fontSize: {
        'h1': ['2.25rem', { lineHeight: '2.5rem', fontWeight: '700' }], // 36px
        'h2': ['1.875rem', { lineHeight: '2.25rem', fontWeight: '700' }], // 30px
        'h3': ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }], // 24px
        'h4': ['1.25rem', { lineHeight: '1.75rem', fontWeight: '600' }], // 20px
        'h5': ['1.125rem', { lineHeight: '1.5rem', fontWeight: '600' }], // 18px
        'h6': ['1rem', { lineHeight: '1.5rem', fontWeight: '600' }], // 16px
        'body': ['1rem', { lineHeight: '1.625', fontWeight: '400' }], // 16px
        'body-lg': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '400' }], // 18px
      },
    },
  },
  plugins: [],
}; 