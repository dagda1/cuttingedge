export function omit<T extends Record<string, unknown>, K extends keyof T>(obj: T, ...keys: K[]): Omit<T, K> {
  const copy = {} as T;

  const remaining = (Object.keys(obj) as K[]).flatMap((c) => (keys.includes(c) === false ? [c] : []));

  for (const k of remaining) {
    copy[k] = obj[k];
  }

  return copy;
}
