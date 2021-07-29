import { composeStyles, style, globalStyle } from '@vanilla-extract/css';
import { responsiveStyle } from 'src/style/responsive-style';
import { vars } from 'src/style/themes/vars.css';
import { atoms } from '../../../style/atoms/sprinkles.css';

export const root = composeStyles(
  atoms({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  }),
  style({
    font: 'inherit',
    fontFamily: 'inherit',
    fontSize: 'inherit',
  }),
);

export const wrapper = style(
  responsiveStyle({
    mobile: {},
    tablet: {
      flex: 1,
    },
  }),
);

export const horizontal = style(
  responsiveStyle({
    mobile: {
      display: 'flex',
      marginTop: vars.space['2x'],
      marginBottom: vars.space['2x'],
    },
    tablet: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      marginTop: vars.space['4x'],
      marginBottom: vars.space['4x'],
    },
  }),
);

export const width2 = style({
  maxWidth: vars.inputWidth.width2,
});

export const width3 = style({
  maxWidth: vars.inputWidth.width3,
});

export const width4 = style({
  maxWidth: vars.inputWidth.width4,
});

export const width5 = style({
  maxWidth: vars.inputWidth.width5,
});

export const width10 = style({
  maxWidth: vars.inputWidth.width10,
});

export const width20 = style({
  maxWidth: vars.inputWidth.width20,
});

export const width30 = style({
  maxWidth: vars.inputWidth.width30,
});

export const horizontalErrorLabel = style(
  responsiveStyle({
    mobile: {},
    tablet: {
      selectors: {
        [`${horizontal} &`]: {
          width: '100%',
        },
      },
    },
  }),
);

globalStyle(`.${root.split(' ').join('.')}.${horizontal} label`, {
  marginRight: vars.space['1x'],
});

export const highlight = 'highlight';
export const label__additional = 'label__additional';
