import { Route, Routes } from 'react-router';
import { fallback } from '../../components/Fallback/Fallback';
import { MathJaxProvider } from '@cutting/use-mathjax';
import loadableModule from '@loadable/component';
import { unwrap } from '../../modules/unwrap';

const loadable = unwrap(loadableModule);

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
