import { paths } from '../config/paths';
import { safePackageName } from '../rollup/helpers';

export const getFileName = ({
  isMainChunk,
  fileType,
  isLibrary,
  isProduction,
}: {
  isMainChunk: boolean;
  fileType: 'js' | 'css';
  isLibrary: boolean;
  isProduction: boolean;
}): string => {
  const packageInfo = require(paths.appPackageJson);
  const pkgName = safePackageName(packageInfo.name);

  if (isLibrary && isMainChunk) {
    return pkgName;
  }

  const prefix = isLibrary ? '' : `static/${fileType}/`;

  // The client file mask is set to just name in start/dev mode as contenthash
  // is not supported for hot reloading. It can also cause non
  // deterministic snapshots in jest tests.
  if (!isProduction) {
    return `${prefix}[name]`;
  }

  // Production builds should contain contenthash for optimal file caching
  return `${prefix}[name]-[contenthash]`;
};
