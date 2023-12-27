import { json } from '@remix-run/node';
import type { MetaFunction, HeadersFunction } from '@remix-run/node';
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react';
import './rehype.css';
import 'katex/dist/katex.min.css';
import './global.css.js';
import { supportTheme } from '@cutting/component-library';
import '@cutting/component-library/styles.css';
import '@cutting/react-hook-form-components/styles.css';
import { FormContextProvider } from '@cutting/react-hook-form-components';
import '~/styles.css';
import { Header } from './components/Header/Header.js';
import * as styles from './root.css.js';
import cs from 'classnames';
import { contactFormProps } from './constants.js';

export async function loader() {
  return json({
    ENV: {
      GIT_COMMIT: process.env.GIT_COMMIT,
    },
  });
}

const CRM = 'https://crm.zoho.eu/crm/WebToLeadForm';
const TRACKING = 'https://salesiq.zoho.eu';
const NEWSLETTER = 'https://maillist-manage.eu/weboptin.zc';
const CDN = 'https://res.cloudinary.com';

const contentSecurityPolicy = [
  `base-uri 'self' ${CDN}`,
  `default-src 'none'`,
  `script-src 'self' ${CDN} ${TRACKING} 'unsafe-inline' 'unsafe-eval' https://plausible.io`,
  `style-src 'self' ${CDN} https://fonts.googleapis.com https://fonts.googleapis.com 'unsafe-inline' data:`,
  `img-src 'self' ${CDN} https://plausible.io https://assets.calendly.com data: blob:`,
  `font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com`,
  `frame-src 'self' https://plausible.io https://calendly.com`,
  `media-src 'self' ${CDN} https://cdn.plyr.io`,
  `connect-src 'self' ${CRM} ${NEWSLETTER} ${CDN} ${TRACKING} https://cdn.plyr.io https://plausible.io ws://localhost:2222`,
  `frame-ancestors 'self' https://plausible.io`,
  `form-action 'self' ${NEWSLETTER} ${CRM} ${CDN};`,
].join(';');

export const headers: HeadersFunction = () => {
  return {
    'X-XSS-Protection': '1; mode=block',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'X-Frame-Options': 'DENY',
    'Strict-Transport-Security': 'max-age=63072000',
    'Content-Security-Policy': contentSecurityPolicy,
  };
};

export const meta: MetaFunction = ({ location }) => {
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

export default function App() {
  const data = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <script defer data-domain="frontendrescue.com" src="https://plausible.io/js/script.js"></script>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
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

          <div style={{ display: 'none' }}>{data?.ENV?.GIT_COMMIT}</div>
        </main>
        <ScrollRestoration />
        <Scripts />
        {/* <LiveReload /> */}
      </body>
    </html>
  );
}
