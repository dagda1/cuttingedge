import type { RouteProps } from 'react-router';
import { EmptyObject } from './object';

export type Page<P = EmptyObject> = RouteProps & {
  heading: string;
  path: string;
  footerPage?: boolean;
  className?: string;
} & P;
