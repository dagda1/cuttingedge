import { isNil } from './isNil';

export const isObject = (value?: unknown): value is object => {
  const type = typeof value;

  return isNil(value) === false && (type === 'object' || type === 'function');
};
