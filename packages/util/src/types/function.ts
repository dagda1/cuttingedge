export type UnknownArgs = any[];

export type Fn<Args extends any[] = UnknownArgs> = (...args: Args) => any;
