import { atoms, responsiveStyle, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const root = style([
  {
    width: '100vw',
  },
  atoms({
    marginTop: {
      mobile: 'large',
      tablet: 'small',
    },
  }),
]);

globalStyle('.calendly-inline-widget', {
  ...responsiveStyle({
    mobile: {
      marginTop: vars.space['small'],
      height: '87vh !important',
    },
    tablet: {
      marginTop: 0,
      height: '91vh !important',
    },
    desktop: {
      marginTop: 0,
      height: '95vh !important',
    },
  }),
});
