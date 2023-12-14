import { type ReactNode } from 'react';
import { fontWeight } from '~/style/typography/typography.css.js';

export interface StrongProps {
  id?: string;
  children: ReactNode;
}

export function Strong({ children, id, ...props }: StrongProps): JSX.Element {
  return (
    <strong {...props} className={fontWeight.strong} id={id}>
      {children}
    </strong>
  );
}
