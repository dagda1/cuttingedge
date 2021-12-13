import '@cutting/component-library/styles.css';
import { FC, useRef } from 'react';
import { useScrollToTop } from '../src/useScrollToTop/useScrollToTop';
import { ApplicationLayout } from '@cutting/component-library';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import * as styles from './global.css';

function Main(): JSX.Element {
  const ref = useRef<HTMLDivElement>();
  useScrollToTop({ ref });

  return (
    <>
      <div ref={ref} className={styles.parent}>
        <h1>Subject</h1>
      </div>
      <div className={styles.child}>
        <h1>Observer</h1>
      </div>
    </>
  );
}

export const App: FC = () => {
  return (
    <ApplicationLayout heading="@cutting/hooks">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Main />} />
        </Routes>
      </BrowserRouter>
    </ApplicationLayout>
  );
};

export default App;
