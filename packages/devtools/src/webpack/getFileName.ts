export const getFileName = ({ fileType, isProduction }: { fileType: 'js' | 'css'; isProduction: boolean }): string => {
  const prefix = `static/${fileType}/`;

  // The client file mask is set to just name in start/dev mode as contenthash
  // is not supported for hot reloading. It can also cause non
  // deterministic snapshots in jest tests.
  if (!isProduction) {
    return `${prefix}[name]`;
  }

  // Production builds should contain contenthash for optimal file caching
  return `${prefix}[name]-[contenthash]`;
};
