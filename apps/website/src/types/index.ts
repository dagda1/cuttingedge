import { History } from 'history';

export type RouterHistory = () => History;

export type DeepPartial<T> = T extends Record<string, unknown> ? { [K in keyof T]?: DeepPartial<T[K]> } : T;
