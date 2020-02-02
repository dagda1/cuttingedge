import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createMemoryHistory, MemoryHistory } from 'history';
import { render } from '@cutting/devtools/jest/react-testing-overrides';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const renderWithRouter = (
  ui: ReactNode,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  }: { route: string; history: MemoryHistory },
) => {
  const reducers = combineReducers({
    router: connectRouter(history),
  });

  const store = createStore(reducers, {}, applyMiddleware(routerMiddleware(history)));

  return {
    ...render(
      <Provider store={store}>
        <ConnectedRouter history={history}>{ui}</ConnectedRouter>
      </Provider>,
    ),
    history,
  };
};
