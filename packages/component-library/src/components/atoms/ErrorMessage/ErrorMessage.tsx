import type { FC, HTMLAttributes } from 'react';
import cs from 'classnames';
import { StandardProps } from '../../../types';
import * as styles from './ErrorMessage.css';
import { visuallyHidden } from '@cutting/design-system';

export type ErrorProps = StandardProps<HTMLAttributes<HTMLUListElement>> & {
  errorMessage: string;
  dataSelector?: string;
  className?: string;
};

export const ErrorMessage: FC<ErrorProps> = ({
  id = 'error',
  dataSelector = 'form-error',
  errorMessage,
  className,
}) => (
  <span id={id} data-selector={dataSelector} className={cs(styles.root, className)}>
    <span className={visuallyHidden}>Error:</span>
    {errorMessage}
  </span>
);
