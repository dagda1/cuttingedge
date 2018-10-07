import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { combineReducers } from 'redux';
import { Middleware } from 'redux';
import { createStore } from 'redux';
import { State } from '../reducers/types';
import { merge } from 'lodash';
import { applyMiddleware } from 'redux';
import { compose } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { routerReducer } from 'react-router-redux';

const getReducers = () => combineReducers({ route: routerReducer });

export const getInitialState = (stateOverride: Partial<State> = {}): State => merge({}, stateOverride);

export const createStoreForTesting = (stateOverride?: Partial<State>) => {
  const initialState = getInitialState(stateOverride);
  const reducer = getReducers();

  const middlewares: Middleware[] = [];
  const enhancers = middlewares.map(a => applyMiddleware(a));

  return createStore(reducer, initialState, compose(...enhancers));
};

export const wrapComponentInReduxForTesting = function<T>(
  Comp: React.ComponentType<T>,
  props = {},
  stateOverride: Partial<State> = {}
): ReactWrapper {
  return mount(
    <Provider store={createStoreForTesting(stateOverride)}>
      <MemoryRouter>
        <Comp {...props} />
      </MemoryRouter>
    </Provider>
  );
};
