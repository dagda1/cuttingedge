import { paths } from '../config/paths';

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = !isDevelopment;

const sassOptions = {
  sassOptions: {
    outputStyle: 'expanded',
    sourceMap: isDevelopment,
    data: '@import "./styles/_overrides.scss";',
    includePaths: [paths.appSrc],
    minimize: isProduction,
  },
};

export default sassOptions;
