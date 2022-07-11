import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// import { createPostCssOptions } from '../createPostCssoptions';
import { cssRegex } from '../constants';
import { paths } from '../../config/paths.js';
export const createCSSLoaders = ({ isNode, }) => {
    return isNode
        ? [
            {
                test: /\.vanilla\.css$/i,
                use: ['css-loader'],
                sideEffects: true,
            },
            {
                test: cssRegex,
                sideEffects: true,
                exclude: /\.vanilla\.css$/i,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            // sourceMap: isDevelopment,
                            modules: false,
                            url: false,
                            // esModule: true,
                        },
                    },
                ],
            },
        ]
        : [
            {
                test: /\.vanilla\.css$/i,
                sideEffects: true,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: paths.publicUrlOrPath,
                        },
                    },
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            modules: false,
                            url: false,
                            // url: [Function: url],
                            // import: [Function: import]
                        },
                    },
                ],
            },
            {
                test: cssRegex,
                sideEffects: true,
                exclude: /\.vanilla\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: paths.publicUrlOrPath,
                            // esModule: true,
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            // sourceMap: isDevelopment,
                            modules: false,
                            url: false,
                            // esModule: true,
                        },
                    },
                    // TODO: reinstate postcss
                    // { loader: 'postcss-loader', options: createPostCssOptions({ isProduction }) },
                ],
            },
        ];
};
//# sourceMappingURL=css.js.map