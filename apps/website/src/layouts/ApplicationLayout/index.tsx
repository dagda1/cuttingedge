import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';
import { CuttingEdge } from '~/constants';
import { Helmet } from 'react-helmet';
import { ApplicationLayoutWithRouterScroll, type ApplicationLayoutProps } from '@cutting/component-library';

export function ApplicationLayout({
  heading,
  center = false,
  centerHeading = false,
  className,
  showFooter = true,
  children,
  ...rest
}: Omit<ApplicationLayoutProps, 'theme'> & { showFooter?: boolean }): JSX.Element {
  return (
    <ApplicationLayoutWithRouterScroll
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
          </Helmet>
          <Header />
        </>
      }
      footer={showFooter ? <Footer /> : undefined}
      {...rest}
    >
      <>{children}</>
    </ApplicationLayoutWithRouterScroll>
  );
}
