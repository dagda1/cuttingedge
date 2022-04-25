import type { ComponentType, PropsWithChildren, ReactElement, ReactNode, Ref } from 'react';
import { useRef } from 'react';
import { useScrollToTop } from '@cutting/hooks';
import cs from 'classnames';

import * as styles from './ApplicationLayout.css';
import { isNil } from '@cutting/util';

export interface ApplicationLayoutProps {
  heading?: string | JSX.Element;
  italicise?: boolean;
  center?: boolean;
  className?: string;
  footer?: ReactElement;
  header?: ReactElement;
  innerRef?: Ref<HTMLElement>;
  children: ReactNode;
}

const ApplicationLayoutHeading: ComponentType<Pick<ApplicationLayoutProps, 'heading'>> = ({ heading }) => {
  if (isNil(heading)) {
    return null;
  }

  return typeof heading === 'string' ? <h1>{heading}</h1> : heading;
};

export function ApplicationLayout({
  heading,
  className,
  innerRef,
  header,
  footer,
  children,
}: PropsWithChildren<ApplicationLayoutProps>): JSX.Element {
  return (
    <>
      <header className={cs({ [styles.hidden]: !header })}>
        <div className={styles.size}>{header}</div>
      </header>
      <main className={cs(styles.body, styles.size, className)} ref={innerRef}>
        <ApplicationLayoutHeading heading={heading} />
        {children}
      </main>
      <footer role="contentinfo" className={cs({ [styles.hidden]: !header }, styles.size)}>
        {footer}
      </footer>
    </>
  );
}

export function ApplicationLayoutWithRouterScroll(props: Omit<ApplicationLayoutProps, 'innerRef'>): JSX.Element {
  const root = useRef<HTMLDivElement>(null);

  useScrollToTop({ ref: root });

  return <ApplicationLayout {...props} innerRef={root} />;
}
