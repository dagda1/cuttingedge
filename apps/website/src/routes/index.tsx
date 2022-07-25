import * as Urls from '../urls';
import { Route, Routes } from 'react-router';
import type { Page } from '../types';
import { ContactMe } from '../components/ContactMe';
import loadable from '@loadable/component';

console.dir({ loadable });

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

const Viz = loadable(() => import('../containers/Viz/Viz'), {
  fallback,
});

/* eslint-disable react/display-name */
export const routable: Page[] = [
  {
    heading: 'Home',
    path: Urls.Home,
    element: <Home />,
  },
  {
    heading: 'OSS',
    path: Urls.OSS,
    element: <OSS />,
  },
  {
    heading: 'Blog',
    path: Urls.Blog,
    element: <Blog />,
  },
  {
    heading: 'CV',
    path: Urls.CV,
    element: <CV />,
  },
  {
    heading: 'Privacy Policy',
    path: Urls.PrivacyPolicy,
    element: <PrivacyPolicy />,
    footerPage: true,
  },
  {
    heading: 'Terms of Service',
    path: Urls.TermsOfService,
    element: <TermsOfService />,
    footerPage: true,
  },
  {
    heading: 'Viz',
    path: '/viz/*',
    element: <Viz />,
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

export const bannerPages = routable.filter((p) => !p.footerPage && p.path !== Urls.Home);

export const footerPages = routable.filter((p) => p.footerPage);
