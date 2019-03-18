export interface IdCounter {
  [key: string]: number;
}

const idCounter: IdCounter = {};

export const uniqueId = (prefix: string = '$idcounter$') => {
  if (!idCounter[prefix]) {
    idCounter[prefix] = 0;
  }

  const id = ++idCounter[prefix];
  if (prefix === '$lodash$') {
    return `${id}`;
  }

  return `${prefix + id}`;
};
