import { composeStyles, style } from '@vanilla-extract/css';
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

export const horizontalRoot = style(
  responsiveStyle({
    mobile: {
      display: 'flex',
    },
    tablet: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
    },
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
      marginTop: vars.space['2x'],
      marginBottom: vars.space['2x'],
    },
    tablet: {
      marginTop: vars.space['4x'],
      marginBottom: vars.space['4x'],
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      flex: 1,
    },
  }),
);

export const horizontalLabel = style(
  responsiveStyle({
    mobile: {},
    tablet: {
      selectors: {
        [`${horizontal} &`]: {
          marginRight: vars.space['2x'],
        },
      },
    },
  }),
);

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

export const highlight = 'highlight';
export const label__additional = 'label__additional';
