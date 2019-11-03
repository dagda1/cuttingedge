/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createStore, applyMiddleware, compose } from 'redux';
import { History } from 'history';
import { routerMiddleware } from 'connected-react-router';
import reducers from '../reducers';
import { State } from '../reducers/types';

declare let __DEV__: boolean;

const configureStore = (initialState: State, history: History) => {
  const middlewares = [routerMiddleware(history)];
  const enhancers = middlewares.map((a) => applyMiddleware(a));

  const getComposeFunc = () => {
    if (process.env.BROWSER && __DEV__) {
      const { composeWithDevTools } = require('redux-devtools-extension');
      return composeWithDevTools;
    }

    return compose;
  };

  const composeFunc = getComposeFunc();
  const composedEnhancers = composeFunc(...enhancers);

  const store = createStore(reducers, initialState, composedEnhancers);

  if (__DEV__ && module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('../reducers').default);
    });
  }

  return store;
};

export default (initialState: State = {}, history: History) => {
  return configureStore(initialState, history);
};
