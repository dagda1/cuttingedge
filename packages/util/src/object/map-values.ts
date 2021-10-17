type ObjectIterator<T, K extends keyof T, R> = (value: T[K], key: string, collection: T) => R;

// eslint-disable-next-line @typescript-eslint/ban-types
export const mapValues = <T extends Record<string, unknown>, R>(
  o: T,
  callback: ObjectIterator<T, keyof T, R>,
): { [P in keyof T]: R } => {
  return Object.entries(o).reduce((a, [key, value]) => {
    a[key as keyof T] = callback(value as T[keyof T], key, o);
    return a;
  }, {} as { [P in keyof T]: R });
};
