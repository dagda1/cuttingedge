import type { Page } from '@cutting/util';
import { Route, Routes, Navigate, useLocation } from 'react-router';
import * as Urls from '../../urls';
import loadable from '@loadable/component';
import { fallback } from '../../components/Fallback/Fallback';
import { MathJaxProvider } from '@cutting/use-mathjax';

const Sine = loadable(() => import('../../components/Sine/Sine'), {
  fallback,
});

const routes: Page[] = [{ heading: 'Sine wave', path: Urls.Sine, element: <Sine /> }];

const Default = () => <Navigate to={Urls.Sine} />;

export function Viz(): JSX.Element {
  const { pathname: currentPath } = useLocation();

  return (
    <MathJaxProvider>
      <Routes>
        {routes.map(({ path, ...rest }) => {
          return <Route key={path} path={path} {...rest} />;
        })}
        <Route path={currentPath} element={<Default />} />
      </Routes>
    </MathJaxProvider>
  );
};

export default Viz;
