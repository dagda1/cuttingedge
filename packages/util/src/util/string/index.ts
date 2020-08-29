import { isDate } from '../date';
import { isNil } from '../object/isNil';

export const decamelize = (str: string): string => str.replace(/([a-z\d])([A-Z])/g, '$1_$2').toLowerCase();

export const dasherize = (str: string): string => decamelize(str).replace(/[ _]/g, '-');

const safeNull = (fn: (s: string) => string) => (txt: string): string => (isNil(txt) ? '' : fn(txt)) as string;

export const stripSpaces = safeNull((txt: string) => txt.replace(/\s/g, ''));

export const safeTrim = safeNull((txt: string) => txt.trim());

export const emptySpacesToNull = (txt: string): string | null => {
  const trimmed = safeTrim(txt);

  return !!trimmed ? trimmed : null;
};

export const capitalize = (str: string): string => str?.replace(/^[a-z]/, (chr) => chr.toUpperCase());

export const createStringTransformer = <F extends (s: string) => R, R>(transform: F) =>
  function applyTransformation<T>(o: T): T {
    if (typeof o === 'string') {
      return (transform(o) as unknown) as T;
    }

    if (typeof o !== 'object' || isNil(o)) {
      return o;
    }

    if (Array.isArray(o)) {
      return (o.map(applyTransformation) as unknown) as T;
    }

    return Object.keys(o).reduce((acc: Partial<T>, key: string) => {
      const value = o[key];

      if (isDate(value)) {
        acc[key] = value;
        return acc;
      }

      if (Array.isArray(value)) {
        acc[key] = value.map((e) => (typeof e === 'string' ? transform(e) : e));
        return acc;
      }

      if (typeof value === 'object' && !isNil(value)) {
        acc[key] = applyTransformation(value);
        return acc;
      }

      if (typeof value !== 'string') {
        acc[key] = value;
        return acc;
      }

      acc[key] = transform(value);
      return acc;
    }, {}) as T;
  };

export const trimObject = createStringTransformer(safeTrim);
export const stripSpacesFromObject = createStringTransformer(stripSpaces);
export const trimAndReplaceEmptyWithNull = createStringTransformer(emptySpacesToNull);

export const padNumber = safeNull((num: string): string => {
  const s = String(num);

  return s.length !== 1 ? s : `0${s}`;
});

export const getLast = (s: string, char = '/'): string => s.split(char).slice(-1)[0];
