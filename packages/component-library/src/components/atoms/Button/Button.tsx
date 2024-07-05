import { identity } from '@cutting/util';
import cs from 'classnames';
import { type ButtonHTMLAttributes, type DetailedHTMLProps, forwardRef, type MouseEventHandler } from 'react';

import { Box } from '~/components/molecules/Box/Box';
import type { StandardProps } from '~/types/index';

import { Text } from '../Text/Text';
import type { ButtonStyle } from './Button.css';
import { buttons, disabled as disabledStyle, root } from './Button.css';

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
