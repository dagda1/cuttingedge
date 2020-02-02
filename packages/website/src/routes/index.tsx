import React from 'react';
import { Home } from '../components/Home';
import { OSS } from '../components/OSS';
import { Blog } from '../components/Blog';
import { CV } from '../components/cv';
import { PrivacyPolicy } from '../components/PrivacyPolicy';
import { TermsOfService } from '../components/TermsOfService';
import { RouteComponentProps } from '@reach/router';
import * as Urls from '../urls';

type Props<T extends Partial<Record<string, string>>> = RouteComponentProps<T> & {
  component: (props: RouteComponentProps<T>) => React.ReactNode;
};

export function Route<Params = {}>({ component, ...props }: Props<Params>): React.ReactElement {
  return <>{component(props as RouteComponentProps<Params>)}</>;
}

export type Routable = {
  heading: string;
  path: string;
  component: React.FC<{}>;
};

export const routeable: Routable[] = [
  {
    heading: 'Home',
    path: Urls.Home,
    component: Home,
  },
  {
    heading: 'OSS',
    path: Urls.OSS,
    component: OSS,
  },
  {
    heading: 'Blog',
    path: Urls.Blog,
    component: Blog,
  },
  {
    heading: 'CV',
    path: Urls.CV,
    component: CV,
  },
  {
    heading: 'Privacy Policy',
    path: Urls.PrivacyPolicy,
    component: PrivacyPolicy,
  },
  {
    heading: 'Terms of Service',
    path: Urls.TermsOfService,
    component: TermsOfService,
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapper = (c: Routable) => ({ path, ...rest }: any): JSX.Element => (
  <Route path={path} component={c} {...rest}></Route>
);

export const routes = routeable.map(mapper);

const footerComponents = [TermsOfService, PrivacyPolicy];

export const footerPages = routeable.filter(r => footerComponents.includes(r.component));

export const bannerPages = routeable.filter(r => !footerComponents.includes(r.component) && r.path !== Urls.Home);
