import cs from 'classnames';
import { useRef } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { useScrollToTop } from '@cutting/hooks';
import { CuttingEdge } from '../../constants';
import { Helmet } from 'react-helmet';
import { ApplicationLayoutWithRouterScroll, cuttingTheme } from '@cutting/component-library';
import * as styles from './ApplicationLayout.css';

export interface ApplicationLayoutProps {
  heading?: string;
  italicise?: boolean;
  center?: boolean;
  className?: string;
  showFooter?: boolean;
  children?: React.ReactNode;
}

export function ApplicationLayout({
  heading,
  italicise,
  center,
  className,
  showFooter = true,
  children,
}: ApplicationLayoutProps): JSX.Element {
  const root = useRef<HTMLDivElement>(null);

  useScrollToTop({ ref: root });

  return (
    <ApplicationLayoutWithRouterScroll
      className={cs(cuttingTheme, className)}
      heading={
        heading && (
          <h1
            className={cs({
              [styles.italic]: italicise,
              [styles.center]: center,
            })}
          >
            {heading}
          </h1>
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
}
