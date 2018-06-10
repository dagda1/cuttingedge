import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter, RouterState } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware, Reducer } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { History } from 'history';

export const wrap = (Comp: React.ComponentType<any>, props = {}, history: History): ReactWrapper => {
  const reducers = combineReducers({
    router: routerReducer as Reducer<RouterState>
  });

  const store = createStore(reducers, {}, applyMiddleware(routerMiddleware(history)));

  return mount(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <>
          <Comp {...props} />
        </>
      </ConnectedRouter>
    </Provider>
  );
};
