import { responsiveStyle, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const root = style({
  flex: 1,
});

export const donut = style({
  display: 'flex',
  alignItems: 'center',
});

globalStyle(`${donut} > div`, {
  marginLeft: vars.space['small'],
  marginRight: vars.space['small'],
});

export const wrongAnswers = style({
  display: 'flex',
  flexDirection: 'column',
});

export const noAnswer = style({});

globalStyle(`${noAnswer} button`, {
  ...responsiveStyle({
    mobile: {
      width: '100%',
    },
    tablet: {
      width: '50%',
    },
    desktop: {
      width: '33%',
    },
  }),
});

export const callButton = style({
  marginTop: vars.space['small'],
  ...responsiveStyle({
    mobile: {
      width: '100%',
    },
    tablet: {
      width: '50%',
    },
    desktop: {
      width: '33%',
    },
  }),
});

globalStyle(`${noAnswer} ${callButton} button`, {
  width: '100%',
});
