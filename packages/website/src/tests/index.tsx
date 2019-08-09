import React, { ReactNode } from 'react';
import { combineReducers } from 'redux';
import { Middleware } from 'redux';
import { createStore } from 'redux';
import { State } from '../reducers/types';
import { applyMiddleware } from 'redux';
import { compose } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { connectRouter } from 'connected-react-router';
import { history } from '../routes/history';
import { createMemoryHistory } from 'history';
import { render } from '@cutting/devtools/jest/react-testing-overrides';

const getReducers = () => combineReducers({ router: connectRouter(history) });

export const getInitialState = (stateOverride: Partial<State> = {}): State => ({ ...stateOverride });

export const createStoreForTesting = (stateOverride?: Partial<State>) => {
  const initialState = getInitialState(stateOverride);
  const reducer = getReducers();

  const middlewares: Middleware[] = [];
  const enhancers = middlewares.map((a) => applyMiddleware(a));

  return createStore(reducer, initialState, compose(...enhancers));
};

export const wrapComponentInReduxForTesting = (
  ui: ReactNode,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
  stateOverride: Partial<State> = {}
) => {
  return {
    ...render(
      <Provider store={createStoreForTesting(stateOverride)}>
        <MemoryRouter>{ui}</MemoryRouter>
      </Provider>
    ),
    history
  };
};
