import cs from 'classnames';
import React from 'react';

const styles = require('./ErrorLabel.scss');

export interface ErrorProps {
  id?: string;
  errorMessage: string;
  dataSelector?: string;
  className?: string;
}

export const Error: React.FunctionComponent<ErrorProps> = ({
  errorMessage,
  className,
  dataSelector = 'form-error'
}) => (
  <ul className={cs('current-errors', className, styles.container)}>
    <li data-selector={dataSelector}>{errorMessage}</li>
  </ul>
);

export const ErrorLabel: React.FunctionComponent<ErrorProps> = ({ id, ...props }) => (
  <div id={id} aria-hidden="false">
    <Error {...props} />
  </div>
);

ErrorLabel.defaultProps = {
  id: 'error',
  dataSelector: 'form-error'
};
