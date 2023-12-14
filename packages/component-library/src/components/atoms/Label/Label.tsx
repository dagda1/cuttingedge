import cs from 'classnames';
import * as styles from './Label.css.js';
import type { FontWeight } from '~/style/types';
import type { PropsWithChildren } from 'react';
import { Text } from '~/components/atoms/Text/Text';

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
      data-testid={dataSelector}
    >
      {typeof children === 'string' ? <Text>{children}</Text> : children}
    </label>
  );
}

Label.displayName = 'Label';
