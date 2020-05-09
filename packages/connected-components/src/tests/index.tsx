import React, { ReactNode } from 'react';
import { createMemoryHistory, MemoryHistory } from 'history';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

export const renderWithRouter: any = (
  ui: ReactNode,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  }: { route: string; history: MemoryHistory },
) => ({
  ...render(<Router>{ui}</Router>),
  history,
});
