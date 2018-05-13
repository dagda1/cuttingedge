import * as cs from 'classnames';
import * as React from 'react';

const styles = require('./Label.scss');

export interface LabelProps {
  id?: string;
  htmlFor?: string;
  invalid?: boolean;
  required?: boolean;
  className?: string;
  strong?: boolean;
  doubleLabelMargin?: boolean;
  dataSelector?: string;
}

export const Label: React.StatelessComponent<LabelProps> = ({
  id,
  htmlFor,
  invalid,
  required,
  className,
  strong,
  doubleLabelMargin,
  children,
  dataSelector
}) =>
  <label
    htmlFor={htmlFor}
    id={id}
    className={cs(styles.default, className, {
      [styles.required]: required,
      [styles.invalid]: invalid,
      [styles.strong]: strong,
      [styles['double-margin']]: doubleLabelMargin
    })}
    data-selector={dataSelector}
  >
    {children}
  </label>;

Label.displayName = 'Label';
