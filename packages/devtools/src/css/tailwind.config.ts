/** @type {TailwindConfig} */
export default {
  // purge: ['./src/**/*.html', './src/**/*.tsx'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans:
          '-apple-system, "Helvetica Neue", "Segoe UI", Roboto, Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        base: '1rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
