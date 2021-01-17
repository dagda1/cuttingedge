import type { FC } from 'react';
import loadable from '@loadable/component';
import * as Urls from 'src/urls';
import { Route, Switch } from 'react-router';
import { Page } from 'src/types';
import { ContactMe } from 'src/components/ContactMe';

const fallback = <div>loading.....</div>;

const props = { fallback, ssr: true };

const Home = loadable(() => import('src/components/Home'), props);

const OSS = loadable(() => import('src/components/OSS'), props);

const Blog = loadable(() => import('src/components/Blog'), props);

const CV = loadable(() => import('src/components/cv'), props);

const PrivacyPolicy = loadable(() => import('src/components/PrivacyPolicy'), props);

const TermsOfService = loadable(() => import('src/components/TermsOfService'), props);

const Graphs = loadable(() => import(/* webpackPrefetch: true */ 'src/containers/Graphs/Landing'), props);

const DataViz = loadable(() => import('src/containers/DataViz/DataViz'), props);

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
    heading: 'Dataviz',
    path: Urls.DataViz,
    component: DataViz,
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
