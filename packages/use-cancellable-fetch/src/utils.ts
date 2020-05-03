/* eslint-disable @typescript-eslint/no-use-before-define */

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop = () => {};

export const isPromise = <T>(obj: any): obj is Promise<T> => {
  return 'function' == typeof obj.then;
};

export const isGenerator = (obj: any): obj is Generator => {
  return 'function' == typeof obj.next && 'function' == typeof obj.throw;
};

export const isGeneratorFunction = (obj: any): obj is GeneratorFunction => {
  const constructor = obj.constructor;
  if (!constructor) return false;
  if (
    'GeneratorFunction' === constructor.name ||
    'GeneratorFunction' === constructor.displayName
  )
    return true;
  return isGenerator(constructor.prototype);
};

export const isObject = (val: any): val is object => {
  return Object == val.constructor;
};
