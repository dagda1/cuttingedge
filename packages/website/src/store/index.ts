import { createStore, applyMiddleware, compose } from 'redux';
import { History } from 'history';
import '../../../../types';
import '../types';
import { routerMiddleware } from 'connected-react-router';
import reducers from '../reducers';

declare var module: any;

const configureStore = (initialState: Object, history: History) => {
  const middlewares = [routerMiddleware(history)];
  const enhancers = middlewares.map(a => applyMiddleware(a));

  const getComposeFunc = () => {
    if (process.env.BROWSER && __DEV__) {
      const { composeWithDevTools } = require('redux-devtools-extension');
      return composeWithDevTools;
    }

    return compose;
  };

  const composeFunc = getComposeFunc();
  const composedEnhancers = composeFunc.apply(null, enhancers);

  const store = createStore(reducers, initialState, composedEnhancers);

  if (__DEV__ && module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('../reducers').default);
    });
  }

  return store;
};

export default (initialState: Object = {}, history: History) => {
  return configureStore(initialState, history);
};
