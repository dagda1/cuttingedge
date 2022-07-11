export const createCSVLoader = () => ({
    test: /\.csv$/,
    loader: 'csv-loader',
    options: {
        header: true,
        skipEmptyLines: true,
    },
});
//# sourceMappingURL=csvLoader.js.map