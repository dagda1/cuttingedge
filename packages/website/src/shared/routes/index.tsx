import * as React from 'react';
import * as Urls from '../../urls';
import { Home } from '../components/Home';

export interface Page {
  path: string;
  component: React.ComponentType<any>;
}

export const pages: Page[] = [
  {
    path: Urls.Home,
    component: Home
  }
];
