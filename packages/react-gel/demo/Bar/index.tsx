import React from 'react';

const styles = require('./Bar.module.scss');

export const Bar: React.FC = ({ children }) => <div className={styles.bar}>{children}</div>;

Bar.displayName = 'Bar';
