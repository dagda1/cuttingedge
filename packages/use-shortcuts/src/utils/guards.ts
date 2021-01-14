import { isObject } from '@cutting/util';
import { Combination, Sequence } from '../types/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isCombination = (o: any): o is Combination<typeof o> => {
  if (!isObject(o)) {
    return false;
  }

  return 'combination' in o;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isSequence = (o: any): o is Sequence<typeof o> => {
  if (!isObject(o)) {
    return false;
  }

  return 'sequence' in o;
};
