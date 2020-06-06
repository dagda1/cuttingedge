import { History } from 'history';
import { RouteProps } from 'react-router';

export type RouterHistory = () => History;

export type Page<P = unknown> = RouteProps & {
  heading: string;
  path: string;
  footerPage?: boolean;
  className?: string;
} & P;
