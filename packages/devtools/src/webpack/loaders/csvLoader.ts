export const createCSVLoader = (): {
  test: RegExp;
  loader: string;
  options: {
    header: boolean;
    skipEmptyLines: boolean;
  };
} => ({
  test: /\.csv$/,
  loader: 'csv-loader',
  options: {
    header: true,
    skipEmptyLines: true,
  },
});
