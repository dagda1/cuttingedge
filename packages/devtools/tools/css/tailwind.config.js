"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @type {TailwindConfig} */
exports.default = {
    // purge: ['./src/**/*.html', './src/**/*.tsx'],
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                sans: '-apple-system, "Helvetica Neue", "Segoe UI", Roboto, Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
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
//# sourceMappingURL=tailwind.config.js.map