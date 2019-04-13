import cs from 'classnames';
import React from 'react';

const styles = require('./ErrorLabel.scss');

export interface ErrorProps {
  id?: string;
  errorMessage: string;
  dataSelector?: string;
  className?: string;
}

export const Error: React.StatelessComponent<ErrorProps> = ({ errorMessage, dataSelector, className }) => (
  <ul className={cs('current-errors', className, styles.container)}>
    <li data-selector={dataSelector}>{errorMessage}</li>
  </ul>
);

Error.defaultProps = {
  dataSelector: 'form-error'
};

export const ErrorLabel: React.StatelessComponent<ErrorProps> = ({ id, ...props }) => (
  <div id={id} className="form-group" aria-hidden="false">
    <Error {...props} />
  </div>
);

ErrorLabel.defaultProps = {
  id: 'error',
  dataSelector: 'form-error'
};
