import React from 'react';
import { Refable } from '../types';

export const isComponentClass = <T>(Comp: React.ComponentType<T>): Comp is React.ComponentClass<T> => {
  return Comp.prototype && (Comp.prototype.render || Comp.prototype.isReactComponent);
};

export const componentHasRef = function<T>(component: React.ReactElement<T> | Refable<T>): component is Refable<T> {
  return !!(component as any).ref;
};

export const isPlainObject = <T>(obj: T): boolean => {
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
