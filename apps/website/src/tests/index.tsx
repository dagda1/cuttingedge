import type { ReactElement } from 'react';
import type { RenderResult } from '@testing-library/react';
import { render } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

export const wrapComponentForTesting = (ui: ReactElement): RenderResult => {
  const history = createMemoryHistory();
  return {
    ...render(
      <Router navigator={history} location={history.location}>
        {ui}
      </Router>,
    ),
  };
};
