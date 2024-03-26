import { endsWith } from './endsWith';
import { stripUnit } from './stripUnit';

const pxtoFactory =
  (to: string) =>
  (pxval: string | number, base: string | number = '16px'): string => {
    let newPxval = pxval;
    let newBase = base;
    if (typeof pxval === 'string') {
      if (!endsWith(pxval, 'px')) {
        throw new Error(`pxVal ${pxval} does not end with px`);
      }
      newPxval = stripUnit(pxval);
    }

    if (typeof base === 'string') {
      if (!endsWith(base, 'px')) {
        throw new Error(`base ${base} does not end with px`);
      }
      newBase = stripUnit(base);
    }

    if (typeof newPxval === 'string') {
      throw new Error(`newPxVal not a string`);
    }

    if (typeof newBase === 'string') {
      throw new Error('newBase is a string');
    }

    return `${newPxval / newBase}${to}`;
  };

export default pxtoFactory;
