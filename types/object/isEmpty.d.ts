declare namespace Empty {
    type String = '';
    type Object = Record<string, never>;
    type Array = never[];
}
declare type Empty = Empty.Array | Empty.Object | Empty.String;
export declare function isEmpty<T extends string | unknown[] | Record<string, unknown> | number>(subject: T | Empty): subject is Bottom<T>;
declare type Bottom<T> = T extends string ? Empty.String : T extends unknown[] ? Empty.Array : T extends Record<string, unknown> ? Empty.Object : never;
export {};
//# sourceMappingURL=isEmpty.d.ts.map