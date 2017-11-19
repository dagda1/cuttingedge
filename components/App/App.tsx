import * as React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
const styles = require('./App.scss');

const AppView: React.StatelessComponent = () => (
  <div className={styles.container}>
    <h1>This is the app</h1>
  </div>
);

export const App = withStyles(styles)(AppView);
