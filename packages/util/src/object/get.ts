export const get = <T>(source: T, path: string | string[], defaultValue?: string) => {
  if (!path) {
    return undefined;
  }

  const pathArray = Array.isArray(path) ? path : path.split(/[,[\].]/g).filter(Boolean);

  return pathArray.reduce((acc, key) => acc && acc[key], source) || defaultValue;
};
