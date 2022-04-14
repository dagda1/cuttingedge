export declare function initArray<T>(length: number, makeElement: (i: number) => T): T[];
export declare function mapValues<K, V1, V2>(map: Map<K, V1>, valueMapper: (value: V1) => V2): Map<K, V2>;
export declare function mapDefined<T, U>(arr: Iterable<T>, mapper: (t: T) => U | undefined): U[];
export declare function mapDefinedAsync<T, U>(arr: Iterable<T>, mapper: (t: T) => Promise<U | undefined>): Promise<U[]>;
export declare function mapIterable<T, U>(inputs: Iterable<T>, mapper: (t: T) => U): Iterable<U>;
export declare function flatMapIterable<T, U>(inputs: Iterable<T>, mapper: (t: T) => Iterable<U>): Iterable<U>;
export declare function sort<T>(values: Iterable<T>, comparer?: (a: T, b: T) => number): T[];
export declare function join<T>(values: Iterable<T>, joiner?: string): string;
/** Returns [values that cb returned undefined for, defined results of cb]. */
export declare function split<T, U>(inputs: readonly T[], cb: (t: T) => U | undefined): [readonly T[], readonly U[]];
/**
 * Appends a range of value to an array, returning the array.
 *
 * @param to The array to which `value` is to be appended. If `to` is `undefined`, a new array
 * is created if `value` was appended.
 * @param from The values to append to the array. If `from` is `undefined`, nothing is
 * appended. If an element of `from` is `undefined`, that element is not appended.
 * @param start The offset in `from` at which to start copying values.
 * @param end The offset in `from` at which to stop copying values (non-inclusive).
 */
export declare function addRange<T>(to: T[], from: readonly T[] | undefined, start?: number, end?: number): T[];
export declare function addRange<T>(to: T[] | undefined, from: readonly T[] | undefined, start?: number, end?: number): T[] | undefined;
/**
 * Appends a value to an array, returning the array.
 *
 * @param to The array to which `value` is to be appended. If `to` is `undefined`, a new array
 * is created if `value` was appended.
 * @param value The value to append to the array. If `value` is `undefined`, nothing is
 * appended.
 */
export declare function append<TArray extends any[] | undefined, TValue extends NonNullable<TArray>[number] | undefined>(to: TArray, value: TValue): [undefined, undefined] extends [TArray, TValue] ? TArray : NonNullable<TArray>[number][];
export declare function append<T>(to: T[], value: T | undefined): T[];
export declare function append<T>(to: T[] | undefined, value: T): T[];
export declare function append<T>(to: T[] | undefined, value: T | undefined): T[] | undefined;
/**
 * Tests whether a value is an array.
 */
export declare function isArray(value: any): value is readonly {}[];
/**
 * Maps an array. If the mapped value is an array, it is spread into the result.
 *
 * @param array The array to map.
 * @param mapfn The callback used to map the result into one or more values.
 */
export declare function flatMap<T, U>(array: readonly T[] | undefined, mapfn: (x: T, i: number) => U | readonly U[] | undefined): readonly U[];
export declare function unique<T>(arr: Iterable<T>): T[];
export declare function sortObjectKeys<T extends {
    [key: string]: unknown;
}>(data: T): T;
export declare function recordToMap<T>(record: Record<string, T>): Map<string, T>;
export declare function recordToMap<T, U>(record: Record<string, T>, cb: (t: T) => U): Map<string, U>;
export declare function mapToRecord<T>(map: Map<string, T>): Record<string, T>;
export declare function mapToRecord<T, U>(map: Map<string, T>, cb: (t: T) => U): Record<string, U>;
/**
 * Returns the input that is better than all others, or `undefined` if there are no inputs.
 * @param isBetter Returns true if `a` should be preferred over `b`.
 */
export declare function best<T>(inputs: Iterable<T>, isBetter: (a: T, b: T) => boolean): T | undefined;
