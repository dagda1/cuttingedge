/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  render,
  queries,
  queryHelpers,
  Matcher,
  MatcherOptions,
  RenderOptions,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { createMemoryHistory, MemoryHistory } from 'history';
import { Router } from 'react-router';

// TODO: make this configurable
const DataSelectorAttributeName = 'data-selector';

export const queryByTestId = queryHelpers.queryByAttribute.bind(
  null,
  DataSelectorAttributeName,
);
export const queryAllByTestId = queryHelpers.queryAllByAttribute.bind(
  null,
  DataSelectorAttributeName,
);

export function getAllByTestId(
  container: HTMLElement,
  id: Matcher,
  options: MatcherOptions,
) {
  const els = queryAllByTestId(container, id, options);
  if (!els.length) {
    throw queryHelpers.getElementError(
      `Unable to find an element by: [${DataSelectorAttributeName}="${id}"]`,
      container,
    );
  }
  return els;
}

export function getByTestId(
  ...args: [HTMLElement, string, MatcherOptions]
): HTMLElement | null {
  const result = getAllByTestId(...args);
  if (result.length > 0) {
    return result[0];
  }
  return null;
}

const mergedQueries = {
  ...queries,
  getByTestId,
  getAllByTestId,
  queryByTestId,
  queryAllByTestId,
};

const customRender = (
  ui: React.ReactElement<any>,
  options: RenderOptions = {},
) => render(ui, { queries: { ...mergedQueries }, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };

export const renderWithRouter = (
  ui: React.ReactElement<any>,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  }:{
    route: string,
    history: MemoryHistory
  },
) => {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
};
