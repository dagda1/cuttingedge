import Head from 'next/head';
import * as styles from './Layout.css';
import { ApplicationLayout } from '@cutting/component-library';
import { TopNav } from '../TopNav/TopNav';
import cs from 'classnames';
import { Footer } from '../Footer/Footer';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

const basePath = 'https://frontenddx.com';
const image = `https://d966n3f4vz4e1.cloudfront.net/dx.jpeg`;

export function Layout({
  title = 'Frontend dx consultant',
  description = `We boost software team's frontend productivity`,
  className,
  children,
}: LayoutProps): JSX.Element {
  const router = useRouter();
  const canonicalUrl = `${basePath}${router.asPath}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"
        />
        <meta name="robots" content="follow, index" />
        <meta name="description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Frontend DX" />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} key={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://twitter.com/dagda1" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ApplicationLayout
        theme="salesTheme"
        header={<TopNav />}
        footer={<Footer />}
        center
        className={cs(styles.layout, className)}
      >
        {children}
      </ApplicationLayout>
    </>
  );
}
