export const createSVGLoader = () => ({
    test: /\.svg/,
    use: {
        loader: 'svg-url-loader',
        options: {},
    },
});
//# sourceMappingURL=svgLoader.js.map