import type { FC } from 'react';
import { Heading } from '@cutting/component-library';
import cs from 'classnames';
import { useRef, useEffect } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { useScrollToTop } from '@cutting/hooks';
import { CuttingEdge } from '../../constants';
import { useLocation } from 'react-router';
import { Covid19 } from '../../urls';
import { Helmet } from 'react-helmet';
import { ApplicationLayoutWithRouterScroll, cuttingTheme } from '@cutting/component-library';

import * as styles from './ApplicationLayout.css';

export interface ApplicationLayoutProps {
  heading?: string;
  italicise?: boolean;
  center?: boolean;
  className?: string;
  showFooter?: boolean;
}

export const ApplicationLayout: FC<ApplicationLayoutProps> = ({
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
    <ApplicationLayoutWithRouterScroll
      className={cs(cuttingTheme, className)}
      heading={
        heading && (
          <Heading
            className={cs({
              [styles.italic]: italicise,
              [styles.center]: center,
            })}
          >
            {heading}
          </Heading>
        )
      }
      header={
        <>
          <Helmet title={heading || CuttingEdge}>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
          </Helmet>
          <Header />
        </>
      }
      footer={showFooter ? <Footer /> : undefined}
    >
      <>{children}</>
    </ApplicationLayoutWithRouterScroll>
  );
};
