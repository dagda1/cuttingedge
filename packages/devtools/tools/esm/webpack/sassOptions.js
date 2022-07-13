import { paths } from '../config/paths.js';
const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = !isDevelopment;
export const sassOptions = {
    sassOptions: {
        outputStyle: 'expanded',
        sourceMap: true,
        includePaths: [paths.appSrc],
        minimize: isProduction,
    },
};
//# sourceMappingURL=sassOptions.js.map