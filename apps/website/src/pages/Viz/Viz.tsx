import { Route, Routes } from 'react-router';
import { Fallback } from '../../components/Fallback/Fallback';
import { MathJaxProvider } from '@cutting/use-mathjax';
import { Suspense, lazy } from 'react';

const Sine = lazy(() => import('../../components/Sine/Sine'));
const FunctionPlot = lazy(() => import('../../components/FunctionPlot/FunctionPlot'));

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
        <Route path="/function-plot" element={<FunctionPlot />} />
      </Routes>
    </MathJaxProvider>
  );
}

export default Viz;
