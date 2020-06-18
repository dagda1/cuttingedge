export const set = <T>(o: T, path: string, value: any) => {
  if (!path || typeof o === 'undefined') {
    return undefined;
  }

  const pathArray = Array.isArray(path) ? path : path.split(/[,[\].]/g).filter(Boolean);

  const addParts = (acc: any, part: string, index = 0) => {
    if (index === pathArray.length - 1) {
      acc[part] = value;
      return;
    }

    acc[part] = acc[part] ?? {};

    addParts(acc[part], pathArray[index + 1], index + 1);
  };

  addParts(o, pathArray[0]);

  return undefined;
};
