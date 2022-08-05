export function unwrap<T>(module: T | { __esModule: boolean; default: T }): T {
  if (typeof module === 'object' && '__esModule' in module && 'default' in module) {
    return module.default;
  }
  return module;
}
