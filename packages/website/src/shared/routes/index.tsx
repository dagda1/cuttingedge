import * as React from 'react';
import * as Urls from '../../urls';
import Home from '../components/Home';
import PrivacyPolicy from '../components/PrivacyPolicy';

export interface Page {
  path: string;
  component: React.ComponentType<any>;
  exact?: boolean;
}

export const pages: Page[] = [
  {
    path: Urls.Home,
    component: Home,
    exact: true
  },
  {
    path: Urls.PrivacyPolicy,
    component: PrivacyPolicy,
    exact: true
  }
];
