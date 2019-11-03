import { AsyncRouteableComponent, AsyncRouteComponentType } from './types';

/** @private is the given object a Function? */
export const isFunction = <T>(obj: T): boolean => 'function' === typeof obj;

/** @private is the given object an Object? */
export const isObject = <T>(obj: T): boolean =>
  obj !== null && typeof obj === 'object';

/** @private is the given object/value a promise? */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isPromise = (value: any): boolean =>
  isObject(value) && isFunction(value.then);

/** @private Guard cluase to narrow the AsyncRouteableComponent union type on getInitialProps */
export function isAsyncComponent<T>(
  Component: AsyncRouteableComponent,
): Component is AsyncRouteComponentType<T> {
  return (
    (Component as AsyncRouteComponentType<T>).getInitialProps !== undefined
  );
}

/** @private Guard cluase to narrow the AsyncRouteableComponent union type on load */
export function isLoadableComponent<Props>(
  Component: AsyncRouteableComponent,
): Component is AsyncRouteComponentType<Props> {
  return (Component as AsyncRouteComponentType<Props>).load !== undefined;
}

export function getDisplayName<T>(
  WrappedComponent: React.ComponentType<T>,
): string {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
