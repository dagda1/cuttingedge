import * as React from 'react';
import * as Urls from '../../urls';
import { Home } from '../components/Home';

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
  }
];
