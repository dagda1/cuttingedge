/* eslint-disable @typescript-eslint/no-use-before-define */
const toPromise = <T>(obj: T | Promise<T>): Promise<T> => {
  if (isPromise(obj)) return obj;
  if (isGeneratorFunction(obj) || isGenerator(obj)) return co.call(this, obj);
  if (Array.isArray(obj)) return arrayToPromise.call(this, obj);
  if (isObject(obj)) return objectToPromise.call(this, obj);
  return obj;
};

const arrayToPromise = (obj: any) => {
  return Promise.all(obj.map(toPromise, this));
};

const objectToPromise = (obj: { [key: string]: any }) => {
  const results = { ...obj };
  const keys = Object.keys(obj);
  const promises: Promise<any>[] = [];

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const promise = promisify.call(ctx, obj[key]);
    if (promise && isPromise(promise)) {
      defer(promise, key);
    } else {
      results[key] = obj[key];
    }
  }

  return Promise.all(promises).then(() => results);

  function defer(promise: Promise<any>, key: string) {
    // predefine the key in the result
    results[key] = undefined;
    promises.push(
      promise.then(res => {
        results[key] = res;
      }),
    );
  }
};

export const isPromise = <T>(obj: any): obj is Promise<T> => {
  return 'function' == typeof obj.then;
};

export const isGenerator = (obj: any): obj is Generator => {
  return 'function' == typeof obj.next && 'function' == typeof obj.throw;
};

const isGeneratorFunction = (obj: any): obj is GeneratorFunction => {
  const constructor = obj.constructor;
  if (!constructor) return false;
  if (
    'GeneratorFunction' === constructor.name ||
    'GeneratorFunction' === constructor.displayName
  )
    return true;
  return isGenerator(constructor.prototype);
};

const isObject = (val: any): val is object => {
  return Object == val.constructor;
};
