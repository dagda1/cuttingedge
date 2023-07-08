import type { LinksFunction, LoaderFunction, MetaFunction, V2_MetaFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import rehypeStyles from './rehype.css';
import katex from 'katex/dist/katex.min.css';
import displacement from '~/images/displacement.jpg';
import normalMap from '~/images/NormalMap2.png';
import { cssBundleHref } from '@remix-run/css-bundle';
import './global.css';
import { supportTheme } from '@cutting/component-library';
import cuttingStyles from '@cutting/component-library/styles.css';
import cssStyles from '~/styles.css';
import { Header } from './components/Header/Header';
import og from '~/images/og.png';
import { URL } from '~/utils/url.server';

export const loader: LoaderFunction = async ({ request }) => {
  const baseUrl = `${new URL(request.url).protocol}://${request.headers.get('host')}`;

  return { baseUrl };
};

export const meta: V2_MetaFunction = ({ location, data }) => {
  const ogImage = `${data.baseUrl}${og}`;
  console.dir(data, { depth: 3 });
  return [
    { charset: 'utf-8' },
    { title: 'Frontend Support' },
    { viewport: 'width=device-width,initial-scale=1' },
    { 'content-type': 'text/html; charset=UTF-8' },
    { 'og:url': location.pathname },
    { 'og:type': 'website' },
    { 'og:site_name': 'Cutting-Edge Solutions' },
    { 'og:description': 'Elite level frontend developer.' },
    { 'og:image': ogImage },
    { 'og:image:width': '1200' },
    { 'og:image:height': '600' },
    { 'og:title': 'Paul Cowan - elite frontend developer and gun for hire' },
    { 'og:image:alt': 'Paul Cowan - elite frontend developer and gun for hire' },
    { 'twitter:title': 'Paul Cowan - elite frontend developer and gun for hire' },
    { 'twitter:card': 'summary_large_image' },
    { 'twitter:site': '@dagda1' },
    { 'twitter:url': location.pathname },
    { 'twitter:description': 'Elite level frontend developer.' },
    { 'twitter:image:src': ogImage },
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
      <body className={supportTheme}>
        <Header />
        <main>
          <Outlet />
          {/* <ScrollRestoration /> */}
          <Scripts />
          <LiveReload />
        </main>
      </body>
    </html>
  );
}
