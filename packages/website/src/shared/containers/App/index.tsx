require('../../global.scss');
import * as React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import history from '../../history';
import { pages } from '../../routes';
import { Provider } from 'react-redux';
import configureStore from '../../../store';
import { Home } from '../../components/Home';
/* import { Helmet } from 'react-helmet'; */

const store = configureStore({}, history);

export class App extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Route path="/" component={Home} exact />
          </ConnectedRouter>
        </Provider>
      </div>
    );
  }
}
