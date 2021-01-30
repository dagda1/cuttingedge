import type { FC, ReactElement, RefObject } from 'react';
import { Heading } from '../../atoms/Heading';
import { useRef } from 'react';
import { useScrollToTop } from '@cutting/hooks';
import cs from 'classnames';

import styles from './ApplicationLayout.module.scss';
import { isNil } from '@cutting/util';

export interface ApplicationLayoutProps {
  heading?: string | JSX.Element;
  italicise?: boolean;
  center?: boolean;
  className?: string;
  Footer?: ReactElement;
  Header?: ReactElement;
  innerRef?: RefObject<HTMLElement>;
}

const ApplicationLayoutHeading: FC<Pick<ApplicationLayoutProps, 'heading'>> = ({ heading }) => {
  if (isNil(heading)) {
    return null;
  }

  return typeof heading === 'string' ? <Heading>{heading}</Heading> : heading;
};

export const ApplicationLayout: FC<ApplicationLayoutProps> = ({
  heading,
  className,
  innerRef,
  Header = <header className={styles.hidden}>Header</header>,
  Footer = <footer className={styles.hidden}>Footer</footer>,
  children,
}) => {
  return (
    <>
      {Header}
      <main className={cs(className)} ref={innerRef}>
        <ApplicationLayoutHeading heading={heading} />
        {children}
      </main>
      {Footer}
    </>
  );
};

export const ApplicationLayoutWithRouterScroll: FC<Omit<ApplicationLayoutProps, 'innerRef'>> = (props) => {
  const root = useRef<HTMLDivElement>(null);

  useScrollToTop({ ref: root });

  return <ApplicationLayout {...props} innerRef={root} />;
};
