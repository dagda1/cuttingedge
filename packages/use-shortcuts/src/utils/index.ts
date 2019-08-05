// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isPlainObject = (obj: any): boolean => {
  const isObject = typeof obj === 'object' && obj !== null && !Array.isArray(obj);

  if (!isObject || (obj.toString && obj.toString() !== '[object Object]')) {
    return false;
  }

  const proto = Object.getPrototypeOf(obj);

  if (proto === null) {
    return true;
  }

  const Ctor = Object.prototype.hasOwnProperty.call(proto, 'constructor') && proto.constructor;

  return (
    typeof Ctor === 'function' &&
    Ctor instanceof Ctor &&
    Function.prototype.toString.call(Ctor) === Function.prototype.toString.call(Object)
  );
};

export const isStringArray = <T>(arr: T[]): boolean => arr.every((x) => typeof x === 'string');

export const clearArray = <T>(a: T[]) => {
  if (!a) {
    return;
  }

  while (a.length) {
    a.pop();
  }
};
