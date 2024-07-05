import type { RenderResult } from '@testing-library/react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import type { ReactElement } from 'react';
import { Router } from 'react-router';

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
