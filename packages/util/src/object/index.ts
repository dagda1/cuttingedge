export const isObject = <T>(value: T): boolean => value !== null && typeof value === 'object';
export const isFunction = <T>(value: T): boolean => typeof value === 'function';
