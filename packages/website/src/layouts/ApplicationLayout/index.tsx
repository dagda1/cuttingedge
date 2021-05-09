import type { FC } from 'react';
import { Heading } from '@cutting/component-library';
import cs from 'classnames';
import { useRef, useEffect } from 'react';
import { Footer } from 'src/components/Footer';
import { Header } from 'src/components/Header';
import { useScrollToTop } from '@cutting/hooks';
import { CuttingEdge } from 'src/constants';
import { useLocation } from 'react-router';
import { Covid19 } from 'src/urls';
import { Helmet } from 'react-helmet';
import { ApplicationLayoutWithRouterScroll } from '@cutting/component-library';

import styles from './ApplicationLayout.module.scss';

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
      className={className}
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
      Header={
        <>
          <Helmet title={heading || CuttingEdge}>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
          </Helmet>
          <Header />
        </>
      }
      Footer={showFooter ? <Footer /> : undefined}
    >
      <>{children}</>
    </ApplicationLayoutWithRouterScroll>
  );
};
