import { Route, Routes } from 'react-router';
import { Fallback } from '../../components/Fallback/Fallback';
import { MathJaxProvider } from '@cutting/use-mathjax';
import { Suspense, lazy } from 'react';
import * as Urls from '../../urls';

const Sine = lazy(() => import('../../components/Sine/Sine'));
const FunctionPlot = lazy(() => import('../../components/FunctionPlot/FunctionPlot'));
const Sine2 = lazy(() => import('../../components/BigSine/Sine2'));
const Tan = lazy(() => import('../../components/Tan/Tan'));

export function Viz(): JSX.Element {
  return (
    <MathJaxProvider>
      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<Fallback />}>
              <Sine />
            </Suspense>
          }
        />
        <Route
          path={Urls.FunctionPlot}
          element={
            <Suspense fallback={<Fallback />}>
              <FunctionPlot />
            </Suspense>
          }
        />
        <Route
          path={Urls.Sine2}
          element={
            <Suspense fallback={<Fallback />}>
              <Sine2 />
            </Suspense>
          }
        />
        <Route
          path={Urls.Tan}
          element={
            <Suspense fallback={<Fallback />}>
              <Tan />
            </Suspense>
          }
        />
      </Routes>
    </MathJaxProvider>
  );
}

export default Viz;
