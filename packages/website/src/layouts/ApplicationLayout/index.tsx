declare let __BROWSER__: any;
import { Heading } from '@cutting/component-library';
import cs from 'classnames';
import React, { useRef, useEffect } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { useScrollToTop } from '@cutting/hooks';
import { CuttingEdge } from '../../../constants';
import { useLocation } from 'react-router';
import { Covid19 } from 'src/urls';
import { Helmet } from 'react-helmet';

const styles = require('./ApplicationLayout.module.scss');

export interface ApplicationLayoutProps {
  heading?: string;
  italicise?: boolean;
  center?: boolean;
  className?: 'string';
  showFooter?: boolean;
}

export const ApplicationLayout: React.FC<ApplicationLayoutProps> = ({
  heading,
  italicise,
  center,
  className,
  showFooter = true,
  children,
}) => {
  const root = useRef<HTMLDivElement>(null);

  useScrollToTop({ ref: root });
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
      <Helmet title={heading || CuttingEdge}>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Helmet>
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
      {showFooter && <Footer />}
    </div>
  );
};
