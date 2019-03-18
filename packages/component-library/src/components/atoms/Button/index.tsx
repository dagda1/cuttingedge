import cs from 'classnames';
import React from 'react';
import { identity } from '@cutting/util';

const styles = require('./Button.scss');

export enum ButtonStyle {
  Primary = 'primary',
  Secondary = 'secondary',
  Inverse = 'inverse'
}

export interface ButtonProps {
  onClick?: React.EventHandler<any>;
  className?: string;
  buttonStyle?: ButtonStyle;
  disabled?: boolean;
  type?: string;
  component?: React.ComponentType<ButtonProps> | string;
  to?: string;
  href?: string;
  id?: string;
  htmlFor?: string;
  tabIndex?: number;
  onKeyDown?: React.KeyboardEventHandler<any>;
  dataSelector?: string;
  title?: string;
}

export const Button: React.StatelessComponent<ButtonProps> = ({
  onClick,
  className,
  buttonStyle,
  disabled,
  type,
  children,
  component,
  dataSelector,
  title,
  ...rest
}) => {
  const Component = component || 'button';

  const primary = buttonStyle === ButtonStyle.Primary;
  const secondary = buttonStyle === ButtonStyle.Secondary;
  const inverse = buttonStyle === ButtonStyle.Inverse;

  if (dataSelector) {
    rest['data-selector'] = dataSelector;
  }

  return (
    <Component
      className={cs(className, styles.default, {
        [styles.disabled]: disabled,
        [styles.inverse]: inverse,
        [styles.primary]: primary,
        [styles.secondary]: secondary
      })}
      type={type}
      onClick={onClick}
      disabled={disabled}
      title={title}
      {...rest}
    >
      {children}
    </Component>
  );
};

Button.defaultProps = {
  onClick: identity,
  type: 'button'
};
