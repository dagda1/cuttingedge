import type { ComponentType, PropsWithChildren, ReactElement, Ref } from 'react';
import { Heading } from '../../atoms/Heading/Heading';
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
}

const ApplicationLayoutHeading: ComponentType<Pick<ApplicationLayoutProps, 'heading'>> = ({ heading }) => {
  if (isNil(heading)) {
    return null;
  }

  return typeof heading === 'string' ? <Heading>{heading}</Heading> : heading;
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
      <footer className={cs({ [styles.hidden]: !header })}>
        <div className={styles.size}>{footer}</div>
      </footer>
    </>
  );
}

export const ApplicationLayoutWithRouterScroll: ComponentType<Omit<ApplicationLayoutProps, 'innerRef'>> = (props) => {
  const root = useRef<HTMLDivElement>(null);

  useScrollToTop({ ref: root });

  return <ApplicationLayout {...props} innerRef={root} />;
};
