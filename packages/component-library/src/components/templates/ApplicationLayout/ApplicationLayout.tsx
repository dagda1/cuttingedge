import type { FC, ReactElement } from 'react';
import { Heading } from '../../atoms/Heading';
import { useRef } from 'react';
import { useScrollToTop } from '@cutting/hooks';
import cs from 'classnames';

import styles from './ApplicationLayout.module.scss';

export interface ApplicationLayoutProps {
  heading?: string;
  italicise?: boolean;
  center?: boolean;
  className?: string;
  Footer?: ReactElement;
  Header?: ReactElement;
}

export const ApplicationLayout: FC<ApplicationLayoutProps> = ({
  heading,
  className,
  Header = <div className={styles.hidden}>Header</div>,
  Footer = <div className={styles.hidden}>Footer</div>,
  children,
}) => {
  const root = useRef<HTMLDivElement>(null);

  useScrollToTop({ ref: root });

  return (
    <>
      {Header}
      <main className={cs(className)} ref={root}>
        {heading && <Heading>{heading}</Heading>}
        {children}
      </main>
      {Footer}
    </>
  );
};
