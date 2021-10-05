import cs from 'classnames';
import * as styles from './Label.css';
import { FontWeight } from '../../../style/themes/make-theme';
import { PropsWithChildren } from 'react';

export interface LabelProps {
  id?: string;
  htmlFor?: string;
  invalid?: boolean;
  required?: boolean;
  className?: string;
  fontWeight?: FontWeight;
  dataSelector?: string;
}

export function Label({
  id,
  htmlFor,
  invalid,
  required,
  className,
  fontWeight,
  children,
  dataSelector,
}: PropsWithChildren<LabelProps>): JSX.Element {
  return (
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
}

Label.displayName = 'Label';
