import type { FC } from 'react';
import cs from 'classnames';

import styles from './Label.module.scss';

export interface LabelProps {
  id?: string;
  htmlFor?: string;
  invalid?: boolean;
  required?: boolean;
  className?: string;
  strong?: boolean;
  dataSelector?: string;
}

export const Label: FC<LabelProps> = ({
  id,
  htmlFor,
  invalid,
  required,
  className,
  strong,
  children,
  dataSelector,
}) => (
  <label
    htmlFor={htmlFor}
    id={id}
    className={cs(styles.default, className, {
      [styles.required]: required,
      [styles.invalid]: invalid,
      [styles.strong]: strong,
    })}
    data-selector={dataSelector}
  >
    {children}
  </label>
);

Label.displayName = 'Label';
