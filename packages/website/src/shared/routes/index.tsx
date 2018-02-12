import * as React from 'react';
import * as Urls from '../../urls';
import Home from '../components/Home';
import PrivacyPolicy from '../components/PrivacyPolicy';
import TermsOfService from '../components/TermsOfService';
import OSS from '../components/OSS';
import Blog from '../components/Blog';

export interface Page {
  heading: string;
  path: string;
  component: React.ComponentType<any>;
  exact?: boolean;
  footerPage?: boolean;
}

export const pages: Page[] = [
  { heading: 'Home', path: Urls.Home, component: Home, exact: true },
  { heading: 'OSS', path: Urls.OSS, component: OSS, exact: true },
  { heading: 'Blog', path: Urls.Blog, component: Blog, exact: true },
  { heading: 'Privacy Policy', path: Urls.PrivacyPolicy, component: PrivacyPolicy, exact: true, footerPage: true },
  { heading: 'Terms of Service', path: Urls.TermsOfService, component: TermsOfService, exact: true, footerPage: true }
];

export const bannerPages = pages.filter(p => !p.footerPage && p.path !== Urls.Home);

export const footerPages = pages.filter(p => p.footerPage);
