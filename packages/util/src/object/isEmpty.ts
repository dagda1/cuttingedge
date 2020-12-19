import { isNil } from './isNil';

namespace Empty {
  export type String = '';
  export type Object = Record<string, never>;
  export type Array = never[];
}

type Empty = Empty.Array | Empty.Object | Empty.String;

export function isEmpty<T extends string | unknown[] | Record<string, unknown> | number>(
  subject: T | Empty,
): subject is Bottom<T> {
  if (isNil(subject)) {
    return true;
  }
  switch (typeof subject) {
    case 'object':
      if (Array.isArray(subject) && subject.length === 0) {
        return true;
      }

      return Object.keys(subject).length === 0;
    case 'string':
      return subject === '';
    default:
      return false;
  }
}

type Bottom<T> = T extends string
  ? Empty.String
  : T extends unknown[]
  ? Empty.Array
  : T extends Record<string, unknown>
  ? Empty.Object
  : never;
