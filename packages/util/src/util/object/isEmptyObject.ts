import { isDate } from '../date';
import isEmpty from 'lodash/isEmpty';
import { isObject } from './isObject';
import { isNil } from './isNil';

export const isEmptyObject = <T>(o: T): boolean => {
  if (isDate(o)) {
    return false;
  }

  if (isEmpty(o)) {
    return true;
  }

  const result = !Object.values(o).some((value) => {
    if (typeof value === 'object') {
      return !isEmptyObject(value);
    }

    return value !== '' && isNil(value) === false;
  });

  return result;
};

export const isObjectAndEmpty = <T>(o: T): boolean => isObject(o) && isEmptyObject(o);
