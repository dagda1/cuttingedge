import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
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
) => {
  const reducers = combineReducers({});

  const store = createStore(reducers);

  return {
    ...render(
      <Provider store={store}>
        <Router>{ui}</Router>
      </Provider>,
    ),
    history,
  };
};
