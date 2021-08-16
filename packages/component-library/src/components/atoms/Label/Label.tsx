import type { FC } from 'react';
import cs from 'classnames';
import * as styles from './Label.css';
import { FontWeight } from '@cutting/design-system';

export interface LabelProps {
  id?: string;
  htmlFor?: string;
  invalid?: boolean;
  required?: boolean;
  className?: string;
  fontWeight?: FontWeight;
  dataSelector?: string;
}

export const Label: FC<LabelProps> = ({
  id,
  htmlFor,
  invalid,
  required,
  className,
  fontWeight,
  children,
  dataSelector,
}) => (
  <label
    htmlFor={htmlFor}
    id={id}
    className={cs(styles.root, className, {
      [styles.invalid]: invalid,
      [styles.required]: required,
      [styles.strong]: fontWeight === 'strong',
    })}
    data-selector={dataSelector}
  >
    {children}
  </label>
);

Label.displayName = 'Label';
