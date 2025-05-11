import { MathJaxProvider } from '@cutting/use-mathjax';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';

import { Fallback } from '~/components/Fallback/Fallback';
import * as Urls from '~/urls';

const Sine = lazy(() => import('~/components/Sine/Sine'));
const FunctionPlot = lazy(() => import('~/components/FunctionPlot/FunctionPlot'));
const Sine2 = lazy(() => import('~/components/BigSine/Sine2'));
const Tan = lazy(() => import('~/components/Tan/Tan'));
const Sinusoidal = lazy(() => import('~/components/Sinusoidal/Sinusoidal'));
const Polar = lazy(() => import('~/components/Polar/Polar'));
const FootballStatsUploader = lazy(() => import('~/pages/FootballStats/FootballStats'));

export function Viz(): JSX.Element {
  return (
    <MathJaxProvider>
      <Routes>
        <Route
          path={Urls.FootballStats}
          element={
            <Suspense fallback={<Fallback />}>
              <FootballStatsUploader />
            </Suspense>
          }
        />
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
        <Route
          path={Urls.Sinusoidal}
          element={
            <Suspense fallback={<Fallback />}>
              <Sinusoidal />
            </Suspense>
          }
        />
        <Route
          path={Urls.Polar}
          element={
            <Suspense fallback={<Fallback />}>
              <Polar />
            </Suspense>
          }
        />
      </Routes>
    </MathJaxProvider>
  );
}

export default Viz;
