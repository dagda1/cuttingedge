import { type DetailedHTMLProps, type ButtonHTMLAttributes, type MouseEventHandler, forwardRef } from 'react';
import cs from 'classnames';
import { identity } from '@cutting/util';
import type { StandardProps } from '~/types';
import type { ButtonStyle } from './Button.css.js';
import { root, buttons, disabled as disabledStyle } from './Button.css.js';
import { Text } from '../Text/Text';
import { Box } from '~/components/molecules/Box/Box';

export type ButtonProps = Omit<
  StandardProps<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> & {
    onClick?: MouseEventHandler;
    buttonStyle?: ButtonStyle;
    ariaLabel?: string;
    ariaLabelledBy?: string;
  },
  'ref'
>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      onClick = identity,
      className,
      buttonStyle = 'primary',
      disabled,
      type = 'button',
      children,
      title,
      dataSelector,
      ariaLabel,
      ariaLabelledBy,
      ...rest
    },
    ref,
  ) => {
    return (
      <Box
        ref={ref}
        component="button"
        className={cs(className, root, buttons[buttonStyle], { [disabledStyle]: disabled })}
        type={type}
        onClick={onClick}
        disabled={disabled}
        title={title}
        data-testid={dataSelector}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        {...rest}
      >
        <Text tone={buttonStyle}>{children}</Text>
      </Box>
    );
  },
);

Button.displayName = 'Button';
