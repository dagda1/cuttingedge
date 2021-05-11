import type { Page } from '@cutting/util';
import type { FC } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router';
import * as Urls from 'src/urls';
import loadable from '@loadable/component';
import { fallback } from 'src/components/Fallback/Fallback';

const Sine = loadable(() => import('src/components/Sine/Sine'), {
  fallback,
});

const routes: Page[] = [{ heading: 'Sine wave', path: Urls.Sine, component: Sine, exact: true }];

const Default = () => <Redirect to={Urls.Sine} />;

export const Viz: FC = () => {
  const { path: currentPath } = useRouteMatch();
  return (
    <>
      <Switch>
        {routes.map(({ path, ...rest }) => {
          return <Route key={path} path={path} {...rest} />;
        })}
        <Route path={currentPath} component={Default} exact />
      </Switch>
    </>
  );
};

export default Viz;
