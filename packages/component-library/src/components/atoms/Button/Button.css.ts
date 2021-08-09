import { style, StyleRule, styleVariants } from '@vanilla-extract/css';
import { responsiveFont } from '../../../style/typography/typography.css';
import { vars } from '../../../style/themes/vars.css';
import { responsiveStyle } from '../../../style/responsive-style';

export const root = style({
  ...responsiveFont(),
  cursor: 'pointer',
  touchAction: 'manipulation',
  ...responsiveStyle({
    mobile: {
      width: '100%',
    },
    tablet: {
      width: 'auto',
    },
  }),
  ':active': {
    top: '2px',
  },
  ':focus': {
    borderColor: vars.accessibility.accessibleOutline.backgroundColor,
    color: vars.foregroundColor.body,
    backgroundColor: vars.accessibility.accessibleOutline.backgroundColor,
    boxShadow: `0 2px 0 ${vars.foregroundColor.body}`,
  },
  ':focus-visible': {
    outline: '3px solid transparent',
  },
});

export const primary: StyleRule = {
  ...vars.buttons.primary,
};

export const secondary: StyleRule = {
  ...vars.buttons.secondary,
};

export const warning: StyleRule = {
  ...vars.buttons.warning,
};

const btns = {
  primary,
  secondary,
  warning,
} as const;

export const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary',
  warning: 'warning',
} as const;

export const disabled = style({
  opacity: 0.5,
});

export type ButtonStyle = keyof typeof buttonTypes;

export const buttons = styleVariants(buttonTypes, (buttonType: ButtonStyle) => btns[buttonType]);
