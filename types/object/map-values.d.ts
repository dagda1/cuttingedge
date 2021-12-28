declare type ObjectIterator<T, R> = (value: T[keyof T], key: string, collection: T) => R;
export declare const mapValues: <T extends Record<string, unknown>, R>(
  o: T,
  callback: ObjectIterator<T, R>,
) => { [P in keyof T]: R };
export {};
//# sourceMappingURL=map-values.d.ts.map
