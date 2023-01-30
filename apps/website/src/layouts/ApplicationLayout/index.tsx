import cs from 'classnames';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { CuttingEdge } from '../../constants';
import { Helmet } from 'react-helmet';
import { ApplicationLayoutWithRouterScroll, type ApplicationLayoutProps as AppProps } from '@cutting/component-library';
import * as styles from './ApplicationLayout.css';

export type ApplicationLayoutProps = Pick<AppProps, 'center' | 'layout' | 'className' | 'children'> & {
  showFooter?: boolean;
  heading?: string;
};

export function ApplicationLayout({
  heading,
  center,
  className,
  showFooter = true,
  layout = 'RESPONSIVE',
  children,
}: ApplicationLayoutProps): JSX.Element {
  return (
    <ApplicationLayoutWithRouterScroll
      layout={layout}
      theme="cuttingTheme"
      className={cs(className)}
      headerAriaLabel="Cutting-Edge Solutions (Scotland)"
      heading={
        heading && (
          <h1
            className={cs({
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
