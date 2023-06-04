import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';
import { CuttingEdge } from '~/constants';
import { Helmet } from 'react-helmet';
import { ApplicationLayoutWithRouterScroll, type ApplicationLayoutProps as AppProps } from '@cutting/component-library';
import './ApplicationLayout.css';

export type ApplicationLayoutProps = Partial<
  Pick<AppProps, 'layout' | 'className' | 'children' | 'centerHeading' | 'center' | 'heading'>
> & {
  showFooter?: boolean;
};

export function ApplicationLayout({
  heading,
  center = false,
  centerHeading = false,
  className,
  showFooter = true,
  layout = 'RESPONSIVE',
  children,
}: ApplicationLayoutProps): JSX.Element {
  return (
    <ApplicationLayoutWithRouterScroll
      layout={layout}
      theme="cuttingTheme"
      className={className}
      headerAriaLabel="Cutting-Edge Solutions (Scotland)"
      heading={heading}
      center={center}
      centerHeading={centerHeading}
      header={
        <>
          <Helmet title={typeof heading === 'string' ? heading : CuttingEdge}>
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
