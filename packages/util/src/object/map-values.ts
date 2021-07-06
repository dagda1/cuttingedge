type ObjectIterator<T, R> = (value: T[keyof T], key: string, collection: T) => R;

export const mapValues = <T extends Record<string, unknown>, R>(
  o: T,
  callback: ObjectIterator<T, R>,
): { [P in keyof T]: R } => {
  return Object.entries(o).reduce((a, [key, value]) => {
    a[key as keyof T] = callback(value as T[keyof T], key, o);
    return a;
  }, {} as { [P in keyof T]: R });
};
