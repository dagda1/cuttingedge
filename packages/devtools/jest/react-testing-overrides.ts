/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, queries, queryHelpers, Matcher, MatcherOptions, RenderOptions } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import '@testing-library/jest-dom/extend-expect';

// TODO: make this configurable
const DataSelectorAttributeName = 'data-selector';

export const queryByTestId = queryHelpers.queryByAttribute.bind(null, DataSelectorAttributeName);
export const queryAllByTestId = queryHelpers.queryAllByAttribute.bind(null, DataSelectorAttributeName);

export function getAllByTestId(container: HTMLElement, id: Matcher, options: MatcherOptions) {
  const els = queryAllByTestId(container, id, options);
  if (!els.length) {
    throw queryHelpers.getElementError(
      `Unable to find an element by: [${DataSelectorAttributeName}="${id}"]`,
      container
    );
  }
  return els;
}

export function getByTestId(...args: [HTMLElement, string, MatcherOptions]) {
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
  queryAllByTestId
};

const customRender = <Element = any>(ui: React.ReactElement<Element>, options: Omit<RenderOptions, 'queries'> = {}) =>
  render(ui, { queries: { ...mergedQueries }, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
