import { getClientEnv } from '../config/env.js';
import { paths } from '../config/paths.js';
import fs from 'fs';
import { execSync } from 'child_process';
import { logger } from '../scripts/logger.js';
const getCommitHash = () => {
    if (!fs.existsSync(paths.gitDir) === false) {
        logger.warn(`no git found.  Creating timestamp`);
        return new Date().toISOString();
    }
    try {
        return execSync('git rev-parse HEAD', { timeout: 1000 }).toString().trim();
    }
    catch (err) {
        logger.error('The git is not working.  Creating a timestamp');
        console.error(err);
        return new Date().toISOString();
    }
};
const commitHash = getCommitHash();
export const getEnvironment = () => {
    const isDevelopment = process.env.NODE_ENV !== 'production';
    const isProduction = process.env.NODE_ENV === 'production';
    const staticAssetName = isDevelopment ? '[path][name].[ext]?[hash:8]' : 'static/media/[hash:8].[ext]';
    const isAnalyse = process.argv.includes('--analyze') || process.argv.includes('--analyse');
    const isVerbose = process.argv.includes('--verbose');
    return {
        isDevelopment,
        staticAssetName,
        isAnalyse,
        isVerbose,
        isProduction,
        commitHash,
    };
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getEnvVariables = ({ isNode, }) => {
    const { isDevelopment } = getEnvironment();
    return getClientEnv(isNode ? 'node' : 'web', {}, {
        'process.env.NODE_ENV': isDevelopment ? JSON.stringify('development') : JSON.stringify('production'),
        __COMMIT__: commitHash,
        __DEV__: isDevelopment,
        __BROWSER__: !isNode,
        __SERVER__: isNode,
    });
};
//# sourceMappingURL=getEnvironment.js.map