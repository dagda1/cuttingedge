export const createMDLoader = () => ({
    test: /\.md$/,
    use: [
        {
            loader: 'html-loader',
        },
        {
            loader: 'markdown-loader',
            options: {},
        },
    ],
});
//# sourceMappingURL=mdLoader.js.map