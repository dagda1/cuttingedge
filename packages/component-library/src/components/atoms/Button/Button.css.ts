import { style, StyleRule, styleVariants } from '@vanilla-extract/css';
import { responsiveFont } from '../../../style/typography/typography';
import { vars } from '../../../style/themes/vars.css';
import { responsiveStyle } from '../../../style/responsive-style';

export const root = style({
  ...responsiveFont(),
  cursor: 'pointer',
  textTransform: vars.buttons.textTransform,
  fontWeight: vars.buttons.fontWeight,
  touchAction: 'manipulation',
  marginBottom: vars.space['5x'],
  ...responsiveStyle({
    mobile: {
      width: vars.buttons.width.mobile,
    },
    tablet: {
      width: vars.buttons.width.tablet,
    },
  }),
  ':active': {
    top: '2px',
  },
  ':focus': {
    borderColor: vars.accessibility.accessibleOutline.backgroundColor,
    color: vars.foregroundColor.body,
    background: vars.accessibility.accessibleOutline.backgroundColor,
  },
  ':focus-visible': {
    outline: '3px solid transparent',
  },
  ':hover': {
    borderColor: vars.accessibility.accessibleOutline.backgroundColor,
    color: vars.foregroundColor.body,
    background: vars.accessibility.accessibleOutline.backgroundColor,
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
