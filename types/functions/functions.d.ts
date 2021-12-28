export declare const noop: () => void;
export declare type Fn = (...args: any) => any;
export declare const isPromise: <T>(obj: unknown) => obj is Promise<T>;
export declare const isAsyncFunction: <F extends Fn>(f: F) => boolean;
export declare const isFunction: (x: any) => x is Fn;
export declare const isObject: (x: any) => x is Record<string, unknown>;
//# sourceMappingURL=functions.d.ts.map
