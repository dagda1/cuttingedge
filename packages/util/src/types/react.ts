import type { FunctionComponent, ComponentClass } from 'react';

export type Taggable<TProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> =
  | FunctionComponent<TProps>
  | ComponentClass<TProps>
  | string;
