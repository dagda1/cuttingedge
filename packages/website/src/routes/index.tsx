import type { FC } from 'react';
import loadable from '@loadable/component';
import * as Urls from '../urls';
import { Route, Switch } from 'react-router';
import type { Page } from '@cutting/util';
import { ContactMe } from '../components/ContactMe';

const fallback = <div>loading....</div>;

const Home = loadable(() => import('../components/Home'), {
  fallback,
});

const OSS = loadable(() => import('../components/OSS'), {
  fallback,
});

const Blog = loadable(() => import('../components/Blog'), {
  fallback,
});

const CV = loadable(() => import('../components/cv'), {
  fallback,
});

const PrivacyPolicy = loadable(() => import('../components/PrivacyPolicy'), {
  fallback,
});

const TermsOfService = loadable(() => import('../components/TermsOfService'), {
  fallback,
});

const Graphs = loadable(() => import(/* webpackPrefetch: true */ '../components/Graphs/Landing'), {
  fallback,
});

const Viz = loadable(() => import('../containers/Viz/Viz'), {
  fallback,
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
  {
    heading: 'Viz',
    path: Urls.Viz,
    component: Viz,
    exact: false,
    footerPage: false,
  },
];

export const Routes: FC = () => (
  <Switch>
    {routable.map(({ path, ...rest }) => (
      <Route key={path} path={path} {...rest} />
    ))}
    <Route path={Urls.ContactMe} component={ContactMe} exact />
  </Switch>
);

export const bannerPages = routable.filter((p) => !p.footerPage && p.path !== Urls.Home);

export const footerPages = routable.filter((p) => p.footerPage);
