import { History } from 'history';
import { RouteProps } from 'react-router';

export type RouterHistory = () => History;

export type DeepPartial<T> = T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } : T;

export type Page<P = unknown> = RouteProps & {
  heading: string;
  path: string;
  footerPage?: boolean;
  className?: string;
} & P;
