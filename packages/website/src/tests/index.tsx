import { ReactElement } from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

export const wrapComponentInReduxForTesting = (ui: ReactElement): RenderResult => {
  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...render(<Router history={createMemoryHistory() as any}>{ui}</Router>),
  };
};
