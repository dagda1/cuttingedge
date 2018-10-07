import { isObject, isFunction } from 'lodash';
import { AsyncRouteableComponent, AsyncRouteComponentType } from './types';

export const isPromise = (value: any): boolean => isObject(value) && isFunction(value.then);

export function isAsyncComponent(Component: AsyncRouteableComponent): Component is AsyncRouteComponentType<any> {
  return (Component as AsyncRouteComponentType<any>).load !== undefined;
}
