import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import rehypeStyles from './rehype.css';
import katex from 'katex/dist/katex.min.css';
import displacement from '~/images/displacement.jpg';
import normalMap from '~/images/NormalMap2.png';
import { cssBundleHref } from '@remix-run/css-bundle';
import * as styles from './global.css';
import { ApplicationLayout, supportTheme } from '@cutting/component-library';
import cs from 'classnames';
import cuttingStyles from '@cutting/component-library/styles.css';
import cssStyles from '~/styles.css';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Frontend Support',
  viewport: 'width=device-width,initial-scale=1',
  'content-type': 'text/html; charset=UTF-8',
});

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
        <Meta />
        <Links />
      </head>
      <body className={cs(supportTheme, styles.body)}>
        <ApplicationLayout theme="supportTheme">
          <Outlet />
          {/* <ScrollRestoration /> */}
          <Scripts />
          <LiveReload />
        </ApplicationLayout>
      </body>
    </html>
  );
}
