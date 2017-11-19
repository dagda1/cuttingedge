import * as React from 'react';
import { Children } from 'react';

const { withStyles } = require('isomorphic-style-loader/lib/withStyles');
const styles = require('./App.scss');

const AppView: React.StatelessComponent = () => (
  <div className={styles.container}>
    <h1>This is the app</h1>
    {Children}
  </div>
);

export const App = withStyles(styles)(AppView);
