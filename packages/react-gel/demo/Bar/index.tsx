import * as React from 'react';

const styles = require('./Bar.scss');

export const Bar: React.StatelessComponent = ({ children }) => <div className={styles.bar}>{children}</div>;

Bar.displayName = 'Bar';
