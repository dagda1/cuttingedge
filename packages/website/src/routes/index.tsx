import { Home } from '../components/Home';
import { OSS } from '../components/OSS';
import { Blog } from '../components/Blog';
import { CV } from '../components/cv';
import { PrivacyPolicy } from '../components/PrivacyPolicy';
import { TermsOfService } from '../components/TermsOfService';

import * as Urls from '../urls';
import { RouteProps } from 'react-router';

export type Page<P = unknown> = RouteProps & {
  heading: string;
  path: string;
  footerPage?: boolean;
} & P;

/* eslint-disable react/display-name */
export const routes: Page[] = [
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

export const bannerPages = routes.filter(p => !p.footerPage && p.path !== Urls.Home);

export const footerPages = routes.filter(p => p.footerPage);
