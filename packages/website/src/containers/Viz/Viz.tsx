import type { Page } from '@cutting/util';
import type { FC } from 'react';
import { Route, Switch } from 'react-router';
import * as Urls from 'src/urls';
import loadable from '@loadable/component';
import { fallback } from 'src/components/Fallback/Fallback';

const Sine = loadable(() => import('src/components/Sine/Sine'), {
  fallback,
});

const routes: Page[] = [{ heading: 'Sine wave', path: Urls.Sine, component: Sine, exact: true }];

export const Viz: FC = () => (
  <Switch>
    {routes.map(({ path, ...rest }) => {
      return <Route key={path} path={path} {...rest} />;
    })}
  </Switch>
);

export default Viz;
