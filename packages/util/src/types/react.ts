import type { DetailedHTMLProps, HTMLAttributes, FC, ComponentClass } from 'react';

export type Taggable<TProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>> =
  | FC<TProps>
  | ComponentClass<TProps>
  | string;

export type ExtractProps<ComponentOrProps> = ComponentOrProps extends React.ComponentType<infer U>
  ? U
  : ComponentOrProps;
