import type { HTMLAttributes } from 'react';
import cs from 'classnames';
import type { StandardProps } from '../../../types';
import * as styles from './ErrorMessage.css';
import { visuallyHidden } from '../../../style/accessibility.css';

export type ErrorProps = StandardProps<HTMLAttributes<HTMLUListElement>> & {
  errorMessage: string;
  dataSelector?: string;
  className?: string;
};

export function ErrorMessage({
  id = 'error',
  dataSelector = 'form-error',
  errorMessage,
  className,
}: ErrorProps): JSX.Element {
  return (
    <span id={id} data-selector={dataSelector} className={cs(styles.root, className)}>
      <span className={visuallyHidden}>Error:</span>
      {errorMessage}
    </span>
  );
}
