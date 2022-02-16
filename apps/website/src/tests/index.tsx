import { ReactElement } from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

export const wrapComponentInReduxForTesting = (ui: ReactElement): RenderResult => {
  const history = createMemoryHistory();
  return {
    ...render(
      <Router navigator={history} location={history.location}>
        {ui}
      </Router>,
    ),
  };
};
