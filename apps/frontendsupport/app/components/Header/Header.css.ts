import { atoms, vars } from '@cutting/component-library';
import { style } from '@vanilla-extract/css';

export const container = style([
  {
    padding: '0 !IMPORTANT',
    position: 'fixed',
    backgroundColor: 'inherit',
    paddingBottom: vars.space['large'],
    zIndex: 10,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: vars.space['xxxlarge'],
  },
  atoms({
    paddingX: {
      mobile: 'small',
      tablet: 'xxlarge',
    },
    paddingY: 'small',
  }),
]);
