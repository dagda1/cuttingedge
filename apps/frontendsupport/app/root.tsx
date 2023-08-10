import type { LinksFunction, LoaderFunction, V2_MetaFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import rehypeStyles from './rehype.css';
import katex from 'katex/dist/katex.min.css';
import { cssBundleHref } from '@remix-run/css-bundle';
import './global.css';
import { supportTheme } from '@cutting/component-library';
import cuttingStyles from '@cutting/component-library/styles.css';
import hookFormStyles from '@cutting/react-hook-form-components/styles.css';
import { FormContextProvider } from '@cutting/react-hook-form-components';
import cssStyles from '~/styles.css';
import { Header } from './components/Header/Header';
import { URL } from '~/utils/url.server';
import * as styles from './root.css';
import cs from 'classnames';
import { contactFormProps } from './constants';

export const loader: LoaderFunction = async ({ request }) => {
  const baseUrl = `${new URL(request.url).protocol}://${request.headers.get('host')}`;

  return { baseUrl };
};

export const meta: V2_MetaFunction = ({ location, data }) => {
  return [
    { title: 'Frontend Rescue' },
    { property: 'og:url', content: location.pathname },
    { property: 'og:description', content: 'Frontend Rescue.' },
    { property: 'og:image', content: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1690818210/og_qsnit3.png' },
    { property: 'og:image:width', content: '704' },
    { property: 'og:image:height', content: '603' },
    { property: 'og:title', content: 'Frontend Rescue' },
    { property: 'og:image:alt', content: 'Frontend Rescue' },
    { name: 'twitter:title', content: 'Frontend Rescue' },
    { name: 'twitter:url', content: location.pathname },
    { name: 'twitter:description', content: 'Frontend Rescue.' },
    {
      name: 'twitter:image:src',
      content: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1690818210/og_qsnit3.png',
    },
  ];
};

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: rehypeStyles,
  },
  {
    rel: 'stylesheet',
    href: katex,
  },
  {
    rel: 'stylesheet',
    href: cuttingStyles as unknown as string,
  },
  {
    rel: 'stylesheet',
    href: hookFormStyles as unknown as string,
  },
  {
    rel: 'stylesheet',
    href: cssBundleHref as string,
  },
  {
    rel: 'stylesheet',
    href: cssStyles,
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <script defer data-domain="frontendrescue.com" src="https://plausible.io/js/script.js"></script>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta property="og:site_name" content="Cutting-Edge Solutions" />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@dagda1" />
        <meta name="author" content="Paul Cowan" />
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/ddospxsc8/image/upload/v1691081476/favicon_zzqnoz.ico"
        />
        <Meta />
        <Links />
      </head>
      <body className={cs(supportTheme, styles.body)}>
        <div id="portal" />
        <Header />
        <main>
          <FormContextProvider {...contactFormProps}>
            <Outlet />
          </FormContextProvider>

          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </main>
      </body>
    </html>
  );
}
