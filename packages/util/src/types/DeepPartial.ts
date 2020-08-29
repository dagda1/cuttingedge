export type DeepPartial<T> = T extends Record<string, unknown> ? { [K in keyof T]?: DeepPartial<T[K]> } : T;
