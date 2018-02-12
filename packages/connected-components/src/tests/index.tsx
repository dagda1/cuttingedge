import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';

export const wrap = (Comp: React.ComponentType<any>, props = {}, history): ReactWrapper => {
  const reducers = combineReducers({
    router: routerReducer
  });

  const store = createStore(reducers, {}, applyMiddleware(routerMiddleware(history)));

  return mount(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <>
          <Comp {...props} />}/>
        </>
      </ConnectedRouter>
    </Provider>
  );
};
