import { isObject } from '@cutting/util';

export function unwrap<T>(module: T | { __esModule: boolean; default: T }): T {
  if (isObject(module) && '__esModule' in module && 'default' in module) {
    return module.default;
  }
  return module;
}
