export declare type PartialShallow<T> = {
  [P in keyof T]?: T[P] extends Record<string, unknown> ? Record<string, unknown> : T[P];
};
export declare type PropertyReturn = string | number | symbol;
export declare const keyBy: <T, K extends keyof T & PropertyKey>(array: T[], key: K) => {};
export declare const pickBy: <T>(
  o: T,
  predicate: <K extends keyof T>(value: T[K]) => PropertyReturn | boolean,
) => PartialShallow<T>;
export declare const countBy: <T>(o: T[], predicate: (o: T) => PropertyReturn) => PartialShallow<T>;
export declare const sortBy: <T, R>(o: T[], selector: (item: T) => R) => T[];
export declare const uniqBy: <T, R>(list: T[], selector: (item: T) => R) => T[];
export declare const sortedUniqBy: <T, R>(o: T[], selector: (item: T) => R) => T[];
export declare const groupBy: <T>(
  o: T[],
  selector: (item: T) => T,
) => {
  [key: string]: T[];
};
//# sourceMappingURL=by.d.ts.map
