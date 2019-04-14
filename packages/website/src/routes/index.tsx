import React from 'react';
import * as Urls from '../urls';
import { asyncComponent } from '../server/asyncComponent';
import { AsyncRouteProps } from '../server/types';

export interface Page<Props = unknown> extends AsyncRouteProps<Props> {
  heading: string;
  path: string;
  footerPage?: boolean;
}

// TODO: better loader
const Loading = () => <div>...LOADING...</div>;

/* eslint-disable react/display-name */
export const routes: Page[] = [
  {
    heading: 'Home',
    path: Urls.Home,
    component: asyncComponent({
      loader: () => import('../components/Home').then((module) => module.Home),
      Placeholder: () => <Loading />
    }),
    exact: true
  },
  {
    heading: 'OSS',
    path: Urls.OSS,
    component: asyncComponent({
      loader: () => import('../components/OSS').then((module) => module.OSS),
      Placeholder: () => <Loading />
    }),
    exact: true
  },
  {
    heading: 'Blog',
    path: Urls.Blog,
    component: asyncComponent({
      loader: () => import('../components/Blog').then((module) => module.Blog),
      Placeholder: () => <Loading />
    }),
    exact: true
  },
  {
    heading: 'CV',
    path: Urls.CV,
    component: asyncComponent({
      loader: () => import('../components/cv').then((module) => module.CV),
      Placeholder: () => <Loading />
    }),
    exact: true
  },
  {
    heading: 'Privacy Policy',
    path: Urls.PrivacyPolicy,
    component: asyncComponent({
      loader: () => import('../components/PrivacyPolicy').then((module) => module.PrivacyPolicy),
      Placeholder: () => <Loading />
    }),
    exact: true,
    footerPage: true
  },
  {
    heading: 'Terms of Service',
    path: Urls.TermsOfService,
    component: asyncComponent({
      loader: () => import('../components/TermsOfService').then((module) => module.TermsOfService),
      Placeholder: () => <Loading />
    }),
    exact: true,
    footerPage: true
  }
];

export const bannerPages = routes.filter((p) => !p.footerPage && p.path !== Urls.Home);

export const footerPages = routes.filter((p) => p.footerPage);
