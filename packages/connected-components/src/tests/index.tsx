import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { History } from 'history';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';

export const wrap = (Comp: React.ComponentType<any>, props = {}, history: History): ReactWrapper => {
  const reducers = combineReducers({
    router: connectRouter(history)
  });

  const store = createStore(reducers, {}, applyMiddleware(routerMiddleware(history)));

  return mount(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Comp {...props} />
      </ConnectedRouter>
    </Provider>
  );
};
