import cs from 'classnames';
import React from 'react';
import { StandardProps } from '../../../types';
import styles from './ErrorLabel.module.scss';

export type ErrorProps = StandardProps<React.HTMLAttributes<HTMLUListElement>> & {
  errorMessage: string;
  dataSelector?: string;
  className?: string;
};

export const Error: React.FC<ErrorProps> = ({ errorMessage, className, dataSelector = 'form-error' }) => (
  <ul className={cs('current-errors', className, styles.container)}>
    <li data-selector={dataSelector}>{errorMessage}</li>
  </ul>
);

export const ErrorLabel: React.FC<ErrorProps> = ({ id, ...props }) => (
  <div id={id} aria-hidden="false">
    <Error {...props} />
  </div>
);

ErrorLabel.defaultProps = {
  id: 'error',
  dataSelector: 'form-error'
};
