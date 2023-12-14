import { style, globalStyle } from '@vanilla-extract/css';
import { responsiveStyle } from '~/style/responsive-style.js';
import { vars } from '~/style/themes/vars.css.js';
import { atoms } from '~/style/atoms/atoms.js';

export const root = style([
  atoms({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flexStart',
  }),
  {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    ...responsiveStyle({
      mobile: {
        marginBottom: vars.space['xxsmall'],
      },
      tablet: {
        marginBottom: vars.space['xsmall'],
      },
    }),
  },
]);

export const error = style({
  paddingLeft: vars.space['xxsmall'],
  borderLeft: `5px solid ${vars.foregroundColor.error}`,
});

export const highlight = style({
  paddingLeft: vars.space['xxsmall'],
  borderLeft: `5px solid ${vars.buttons.primary.background}`,
});

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
      marginTop: vars.space['xxsmall'],
    },
    tablet: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      marginTop: vars.space['xsmall'],
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

export const width100 = style({
  maxWidth: vars.inputWidth.width100,
});

export const widthQuarter = style({
  width: vars.inputWidth.widthQuarter,
});

export const widthThird = style({
  width: vars.inputWidth.widthThird,
});

export const widthHalf = style({
  width: vars.inputWidth.widthHalf,
});

export const widthTwoThirds = style({
  width: vars.inputWidth.widthTwoThirds,
});

export const widthThreeQuarters = style({
  width: vars.inputWidth.widthThreeQuarters,
});

export const Full = style({
  width: vars.inputWidth.width100,
});

globalStyle(`.${root} label`, {
  marginBottom: vars.space['xxsmall'],
});

globalStyle(`.${root}.${horizontal} label`, {
  marginRight: vars.space['xxsmall'],
});

globalStyle(`.${root} [role=alert]`, {
  width: '100%',
});

export const label__additional = 'label__additional';
