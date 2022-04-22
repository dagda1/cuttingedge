import type { History } from 'history';
import type { RouteProps } from 'react-router';

export type RouterHistory = () => History;

export type DeepPartial<T> = T extends Record<string, unknown> ? { [K in keyof T]?: DeepPartial<T[K]> } : T;

export type Page<P = Record<never, never>> = RouteProps & {
  heading: string;
  path: string;
  footerPage?: boolean;
  className?: string;
} & P;
