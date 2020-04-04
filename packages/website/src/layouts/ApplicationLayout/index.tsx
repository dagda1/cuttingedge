declare let __BROWSER__: any;
import { Heading } from '@cutting/component-library';
import cs from 'classnames';
import React, { useRef, useEffect } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { useScrollToTop, useDocumentTitle } from '@cutting/hooks';
import { CuttingEdge } from '../../../constants';
import { useLocation } from 'react-router';
import { Covid19 } from 'src/urls';

const styles = require('./ApplicationLayout.module.scss');

export interface ApplicationLayoutProps {
  heading?: string;
  italicise?: boolean;
  center?: boolean;
  className?: 'string';
}

export const ApplicationLayout: React.FC<ApplicationLayoutProps> = ({
  heading,
  italicise,
  center,
  className,
  children,
}) => {
  const root = useRef<HTMLDivElement>(null);

  useScrollToTop({ ref: root });
  useDocumentTitle(heading || CuttingEdge);
  const { pathname } = useLocation();

  useEffect(() => {
    if (__BROWSER__ && pathname.indexOf(Covid19) > -1) {
      document.body.classList.add('covid');
    } else {
      document.body.classList.remove('covid');
    }
  }, [pathname]);

  return (
    <div className={styles['sr-anchor']} ref={root}>
      <Header />
      <main className={className}>
        {heading && (
          <Heading
            className={cs({
              [styles.italic]: italicise,
              [styles.center]: center,
            })}
          >
            {heading}
          </Heading>
        )}
        {children}
      </main>
      <Footer />
    </div>
  );
};
