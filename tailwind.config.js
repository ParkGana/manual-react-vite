/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: 'var(--white)',
        black: 'var(--black)',
        'gray-100': 'var(--gray-100)',
        'gray-200': 'var(--gray-200)',
        'gray-300': 'var(--gray-300)',
        'gray-400': 'var(--gray-400)',
        'gray-500': 'var(--gray-500)',
        'gray-600': 'var(--gray-600)',
        'gray-700': 'var(--gray-700)',
        'gray-800': 'var(--gray-800)',
        'gray-900': 'var(--gray-900)'
      },
      fontSize: {
        'title-2xl': ['40px', { lineHeight: '135%', fontWeight: '700' }],
        'title-xl': ['24px', { lineHeight: '135%', fontWeight: '700' }],
        'title-l': ['20px', { lineHeight: '135%', fontWeight: '700' }],
        'title-m': ['16px', { lineHeight: '135%', fontWeight: '700' }],
        'title-s': ['12px', { lineHeight: '135%', fontWeight: '700' }],
        'body-xl': ['24px', { lineHeight: '150%', fontWeight: '500' }],
        'body-l': ['20px', { lineHeight: '150%', fontWeight: '500' }],
        'body-m': ['16px', { lineHeight: '150%', fontWeight: '500' }],
        'body-s': ['12px', { lineHeight: '150%', fontWeight: '500' }],
        'label-l': ['20px', { lineHeight: '150%', fontWeight: '700' }],
        'label-m': ['16px', { lineHeight: '150%', fontWeight: '700' }],
        'label-s': ['12px', { lineHeight: '150%', fontWeight: '700' }],
        'label-xs': ['10px', { lineHeight: '150%', fontWeight: '700' }],
        'caption-m': ['16px', { lineHeight: '150%', fontWeight: '500' }],
        'caption-s': ['12px', { lineHeight: '150%', fontWeight: '500' }],
        'caption-xs': ['10px', { lineHeight: '150%', fontWeight: '500' }]
      }
    }
  },
  plugins: []
};
