import type { FC, HTMLAttributes } from 'react';
import cs from 'classnames';
import { StandardProps } from '../../../types';
import styles from './ErrorLabel.module.scss';

export type ErrorProps = StandardProps<HTMLAttributes<HTMLUListElement>> & {
  errorMessage: string;
  dataSelector?: string;
  className?: string;
};

export const Error: FC<ErrorProps> = ({ errorMessage, className, dataSelector = 'form-error' }) => (
  <ul className={cs('current-errors', className, styles.container)}>
    <li data-selector={dataSelector}>{errorMessage}</li>
  </ul>
);

export const ErrorLabel: FC<ErrorProps> = ({ id = 'error', dataSelector = 'form-error', ...props }) => (
  <div id={id} aria-hidden="false">
    <Error dataSelector={dataSelector} {...props} />
  </div>
);
