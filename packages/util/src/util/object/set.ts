export const set = <T, V>(o: T, path: string, value: V): void => {
  if (!path || typeof o === 'undefined') {
    return undefined;
  }

  const pathArray = Array.isArray(path) ? path : path.split(/[,[\].]/g).filter(Boolean);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addParts = (acc: Record<string, any>, part: string, index = 0) => {
    if (index === pathArray.length - 1) {
      acc[part] = value;
      return;
    }

    acc[part] = acc[part] ?? {};

    addParts(acc[part], pathArray[index + 1], index + 1);
  };

  addParts(o, pathArray[0]);
};
