/** Progress options needed for `nAtATime`. Other options will be inferred. */
interface ProgressOptions<T, U> {
    readonly name: string;
    flavor(input: T, output: U): string | undefined;
}
export declare function nAtATime<T, U>(n: number, inputs: readonly T[], use: (t: T) => Awaitable<U>, progressOptions?: ProgressOptions<T, U>): Promise<U[]>;
export declare function filter<T>(iterable: Iterable<T>, predicate: (value: T) => boolean): IterableIterator<T>;
export declare type Awaitable<T> = T | Promise<T>;
export declare function filterNAtATimeOrdered<T>(n: number, inputs: readonly T[], shouldKeep: (input: T) => Awaitable<boolean>, progress?: ProgressOptions<T, boolean>): Promise<T[]>;
export declare function logUncaughtErrors<T>(promise: Promise<T> | (() => Promise<T>)): Promise<T>;
export {};
