import React from 'react';
import loadable from '@loadable/component';

import * as Urls from '../urls';
import { RouteProps, Route, Switch } from 'react-router';

export type Page<P = unknown> = RouteProps & {
  heading: string;
  path: string;
  footerPage?: boolean;
} & P;

const Home = loadable(() => import('src/components/Home'));
const OSS = loadable(() => import('src/components/OSS'));
const Blog = loadable(() => import('src/components/Blog'));
const CV = loadable(() => import('src/components/cv'));
const PrivacyPolicy = loadable(() => import('src/components/PrivacyPolicy'));
const TermsOfService = loadable(() => import('src/components/TermsOfService'));

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
];

export const Routes: React.FC = () => (
  <Switch>
    {routable.map(({ path, ...rest }) => (
      <Route key={path} path={path} {...rest} />
    ))}
  </Switch>
);

export const bannerPages = routable.filter(p => !p.footerPage && p.path !== Urls.Home);

export const footerPages = routable.filter(p => p.footerPage);
