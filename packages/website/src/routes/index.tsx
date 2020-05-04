import React from 'react';
import loadable from '@loadable/component';

import * as Urls from 'src/urls';
import { Route, Switch } from 'react-router';
import { Page } from 'src/types';

const fallback = <div>loading....</div>;

const Home = loadable(() => import('src/components/Home'), {
  fallback,
});

const OSS = loadable(() => import('src/components/OSS'), {
  fallback,
});

const Blog = loadable(() => import('src/components/Blog'), {
  fallback: <div>Loading...</div>,
});

const CV = loadable(() => import('src/components/cv'), {
  fallback: <div>Loading...</div>,
});

const PrivacyPolicy = loadable(() => import('src/components/PrivacyPolicy'), {
  fallback: <div>Loading...</div>,
});

const TermsOfService = loadable(() => import('src/components/TermsOfService'), {
  fallback: <div>Loading...</div>,
});

const Graphs = loadable(() => import('src/components/Graphs/Landing'), {
  fallback: <div>Loading...</div>,
});

/* eslint-disable react/display-name */
export const routable: Page[] = [
  {
    heading: 'Home',
    path: Urls.Home,
    component: Home,
    exact: true,
  },
  {
    heading: 'OSS',
    path: Urls.OSS,
    component: OSS,
    exact: true,
  },
  {
    heading: 'Blog',
    path: Urls.Blog,
    component: Blog,
    exact: true,
  },
  {
    heading: 'CV',
    path: Urls.CV,
    component: CV,
    exact: true,
  },
  {
    heading: 'Privacy Policy',
    path: Urls.PrivacyPolicy,
    component: PrivacyPolicy,
    exact: true,
    footerPage: true,
  },
  {
    heading: 'Terms of Service',
    path: Urls.TermsOfService,
    component: TermsOfService,
    exact: true,
    footerPage: true,
  },
  {
    heading: 'COVID-19',
    path: Urls.Covid19,
    component: Graphs,
    exact: false,
    footerPage: false,
  },
];

export const Routes: React.FC = () => (
  <Switch>
    {routable.map(({ path, ...rest }) => (
      <Route key={path} path={path} {...rest} />
    ))}
  </Switch>
);

export const bannerPages = routable.filter(
  p => !p.footerPage && p.path !== Urls.Home,
);

export const footerPages = routable.filter(p => p.footerPage);
