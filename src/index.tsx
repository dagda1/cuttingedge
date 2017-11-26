import * as React from 'react';
import { hydrate } from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import * as App from './components/App/App';

const history = createHistory();

const render = App => hydrate(<App />);
