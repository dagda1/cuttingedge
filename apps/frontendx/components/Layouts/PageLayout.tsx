import type { ReactNode } from 'react';
import cs from 'classnames';
import * as styles from './PageLayout.css';
import { Heading } from '@cutting/component-library';

export interface PageLayoutProps {
  heading?: string;
  className?: string;
  children?: ReactNode;
}

export function PageLayout({ heading, className, children }: PageLayoutProps): JSX.Element {
  return (
    <section className={cs(styles.main, className)}>
      {heading && <Heading level="1">{heading}</Heading>}
      {children}
    </section>
  );
}
