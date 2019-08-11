import cs from 'classnames';
import React from 'react';

const styles = require('./Label.scss');

export interface LabelProps {
  id?: string;
  htmlFor?: string;
  invalid?: boolean;
  required?: boolean;
  className?: string;
  strong?: boolean;
  dataSelector?: string;
}

export const Label: React.FC<LabelProps> = ({
  id,
  htmlFor,
  invalid,
  required,
  className,
  strong,
  children,
  dataSelector
}) => (
  <label
    htmlFor={htmlFor}
    id={id}
    className={cs(styles.default, className, {
      [styles.required]: required,
      [styles.invalid]: invalid,
      [styles.strong]: strong
    })}
    data-selector={dataSelector}
  >
    {children}
  </label>
);

Label.displayName = 'Label';
