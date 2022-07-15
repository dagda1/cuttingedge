import { isNil } from './isNil.js';

export const isObject = (value?: unknown): value is Record<string, unknown> => {
  const type = typeof value;

  return isNil(value) === false && (type === 'object' || type === 'function');
};
