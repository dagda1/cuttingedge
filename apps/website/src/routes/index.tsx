import * as Urls from '~/urls';
import { Route, Routes } from 'react-router';
import type { Page } from '~/types/index';
import { ContactMe } from '~/components/ContactMe';
import { lazy, Suspense } from 'react';
import { Fallback } from '~/components/Fallback/Fallback';

const Home = lazy(() => import('~/pages/Home'));

const OSS = lazy(() => import('~/pages/OSS'));

const Blog = lazy(() => import('~/pages/Blog'));

const CV = lazy(() => import('~/pages/cv'));

const PrivacyPolicy = lazy(() => import('~/pages/PrivacyPolicy'));

const TermsOfService = lazy(() => import('~/pages/TermsOfService'));

const Viz = lazy(() => import('~/pages/Viz/Viz'));

/* eslint-disable react/display-name */
export const routable: Page[] = [
  {
    heading: 'Home',
    path: Urls.Home,
    element: (
      <Suspense fallback={<Fallback />}>
        <Home />
      </Suspense>
    ),
  },
  {
    heading: 'OSS',
    path: Urls.OSS,
    element: (
      <Suspense fallback={<Fallback />}>
        <OSS />
      </Suspense>
    ),
  },
  {
    heading: 'Blog',
    path: Urls.Blog,
    element: (
      <Suspense fallback={<Fallback />}>
        <Blog />
      </Suspense>
    ),
  },
  {
    heading: 'CV',
    path: Urls.CV,
    element: (
      <Suspense fallback={<Fallback />}>
        <CV />
      </Suspense>
    ),
  },
  {
    heading: 'Privacy Policy',
    path: Urls.PrivacyPolicy,
    element: (
      <Suspense fallback={<Fallback />}>
        <PrivacyPolicy />
      </Suspense>
    ),
    footerPage: true,
  },
  {
    heading: 'Terms of Service',
    path: Urls.TermsOfService,
    element: (
      <Suspense fallback={<Fallback />}>
        <TermsOfService />
      </Suspense>
    ),
    footerPage: true,
  },
  {
    heading: 'Viz',
    path: '/viz/*',
    element: (
      <Suspense fallback={<Fallback />}>
        <Viz />
      </Suspense>
    ),
    footerPage: false,
  },
];

export function MainRoutes(): JSX.Element {
  return (
    <Routes>
      {routable.map(({ path, ...rest }) => (
        <Route key={path} path={path} {...rest} />
      ))}
      <Route path={Urls.ContactMe} element={<ContactMe />} />
    </Routes>
  );
}

export const bannerPages = routable.filter((p) => !p.footerPage && p.path !== Urls.Home && p.heading !== 'Viz');

export const footerPages = routable.filter((p) => p.footerPage);
