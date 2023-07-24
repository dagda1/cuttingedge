import type { LinksFunction, LoaderFunction, V2_MetaFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import rehypeStyles from './rehype.css';
import katex from 'katex/dist/katex.min.css';
import displacement from '~/images/displacement.jpg';
import normalMap from '~/images/NormalMap2.png';
import { cssBundleHref } from '@remix-run/css-bundle';
import './global.css';
import { supportTheme } from '@cutting/component-library';
import cuttingStyles from '@cutting/component-library/styles.css';
import hookFormStyles from '@cutting/react-hook-form-components/styles.css';
import cssStyles from '~/styles.css';
import { Header } from './components/Header/Header';
import og from '~/images/og.png';
import { URL } from '~/utils/url.server';
import * as styles from './root.css';
import cs from 'classnames';

const isProduction = process.env.NODE_ENV === 'production';

export const loader: LoaderFunction = async ({ request }) => {
  const baseUrl = `${new URL(request.url).protocol}://${request.headers.get('host')}`;

  return { baseUrl };
};

export const meta: V2_MetaFunction = ({ location, data }) => {
  const ogImage = `${data.baseUrl}${og}`;
  return [
    { charset: 'utf-8' },
    { title: 'Frontend Support' },
    {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1',
    },
    { property: 'og:url', content: location.pathname },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Cutting-Edge Solutions' },
    { property: 'og:description', content: 'Elite level frontend developer.' },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '600' },
    { property: 'og:title', content: 'Paul Cowan - elite frontend developer and gun for hire' },
    { property: 'og:image:alt', content: 'Paul Cowan - elite frontend developer and gun for hire' },
    { name: 'twitter:title', content: 'Paul Cowan - elite frontend developer and gun for hire' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@dagda1' },
    { name: 'twitter:url', content: location.pathname },
    { name: 'twitter:description', content: 'Elite level frontend developer.' },
    { name: 'twitter:image:src', content: ogImage },
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
    rel: 'preload',
    href: displacement,
    as: 'image',
  },
  {
    rel: 'preload',
    href: normalMap,
    as: 'image',
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
        {isProduction && (
          <script defer data-domain="frontendrescue.com" src="https://plausible.io/js/script.js"></script>
        )}
        <Meta />
        <Links />
      </head>
      <body className={cs(supportTheme, styles.body)}>
        <Header />
        <div id="portal" />
        <main>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </main>
      </body>
    </html>
  );
}
