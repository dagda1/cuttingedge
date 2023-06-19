import { atoms, responsiveStyle } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
});

export const introRoot = style({
  display: 'flex',
});

export const container = style({
  flex: '1',
  display: 'flex',
  justifyContent: 'flex-start',
});

export const start = style([
  atoms({
    justifyContent: 'center',
    display: 'flex',
    marginTop: 'small',
  }),
]);

globalStyle(`${start} a, ${start} > div`, {
  display: 'inline-block',
  ...responsiveStyle({
    mobile: {
      width: '100%',
    },
  }),
});

globalStyle(`${root} h1`, {
  margin: 0,
  ...responsiveStyle({
    mobile: {
      fontSize: '2rem',
    },
    tablet: {
      fontSize: '3rem',
    },
  }),
});

export const action = style({});
