import React, { ReactNode } from 'react';
import { createMemoryHistory, MemoryHistory } from 'history';
import { render } from '@cutting/devtools/jest/react-testing-overrides';
import { BrowserRouter as Router } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const renderWithRouter = (
  ui: ReactNode,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  }: { route: string; history: MemoryHistory },
) => ({
  ...render(<Router>{ui}</Router>),
  history,
});
