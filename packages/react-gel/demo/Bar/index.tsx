import React from 'react';

const styles = require('./Bar.scss');

export const Bar: React.FunctionComponent = ({ children }) => <div className={styles.bar}>{children}</div>;

Bar.displayName = 'Bar';
