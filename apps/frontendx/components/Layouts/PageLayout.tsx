import type { ReactNode } from 'react';
import cs from 'classnames';
import * as styles from './PageLayout.css';

export interface PageLayoutProps {
  heading?: string;
  className?: string;
  children?: ReactNode;
}

export function PageLayout({ heading, className, children }: PageLayoutProps): JSX.Element {
  return (
    <section className={cs(styles.main, className)}>
      {heading && <h1>{heading}</h1>}
      {children}
    </section>
  );
}
