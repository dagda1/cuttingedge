import * as React from 'react';
import * as Urls from '../../urls';
import Home from '../components/Home';
import PrivacyPolicy from '../components/PrivacyPolicy';
import OSS from '../components/PrivacyPolicy';
import Blog from '../components/Blog';

export interface Page {
  heading: string;
  path: string;
  component: React.ComponentType<any>;
  exact?: boolean;
}

export const pages: Page[] = [
  { heading: 'Home', path: Urls.Home, component: Home, exact: true },
  { heading: 'OSS', path: Urls.OSS, component: OSS },
  { heading: 'Blog', path: Urls.Blog, component: Blog },
  { heading: 'Privacy Policy', path: Urls.PrivacyPolicy, component: PrivacyPolicy, exact: true }
];
