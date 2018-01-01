require('../../global.scss');
import * as React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory';
/* import { Helmet } from 'react-helmet'; */

const history = createHistory();

export class App extends React.Component<any, any> {
  render() {
    return (
      <div>
        <ConnectedRouter history={history} />
      </div>
    );
  }
}
