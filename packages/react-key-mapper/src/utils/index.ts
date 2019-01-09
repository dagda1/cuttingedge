import React from 'react';
import { Refable } from '../types';

export const isComponentClass = <T>(Comp: React.ComponentType<T>): Comp is React.ComponentClass<T> => {
  return Comp.prototype && (Comp.prototype.render || Comp.prototype.isReactComponent);
};

export const componentHasRef = function<T>(component: React.ReactElement<T> | Refable<T>): component is Refable<T> {
  return !!(component as any).ref;
};
