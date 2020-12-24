import { ReactElement } from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

export const wrapComponentInReduxForTesting = (ui: ReactElement): RenderResult => {
  return {
    ...render(<Router history={createMemoryHistory()}>{ui}</Router>),
  };
};
