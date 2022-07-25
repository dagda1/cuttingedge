import { Route, Routes } from 'react-router';
import { fallback } from '../../components/Fallback/Fallback';
import { MathJaxProvider } from '@cutting/use-mathjax';
import loadable from '@loadable/component';

console.dir({ loadable });

const Sine = loadable(() => import('../../components/Sine/Sine'), {
  fallback,
});

export function Viz(): JSX.Element {
  return (
    <MathJaxProvider>
      <Routes>
        <Route index element={<Sine />} />
      </Routes>
    </MathJaxProvider>
  );
}

export default Viz;
