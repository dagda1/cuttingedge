import { isEmpty } from './isEmpty';
import { isDate } from '../date/date';
import { isNil } from './isNil';
import { isObject } from './isObject';

export const isEmptyObject = <T extends Record<string, unknown>>(o: T): boolean => {
  if (isDate(o)) {
    return false;
  }

  if (isEmpty(o)) {
    return true;
  }

  const result = !Object.values(o).some((value) => {
    if (typeof value === 'object' && !isNil(value)) {
      return !isEmptyObject(value as Record<string, unknown>);
    }

    return !isNil(value);
  });

  return result;
};

export const isObjectAndEmpty = <T>(o: T): boolean => isObject(o) && isEmptyObject(o);
