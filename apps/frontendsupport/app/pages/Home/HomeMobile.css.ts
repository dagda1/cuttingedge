import { palette, responsiveStyle } from '@cutting/component-library';
import { style } from '@vanilla-extract/css';

export const bg = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
});

export const heading = style({
  color: palette.white,
  textShadow: '1px 1px 3px black',
  zIndex: 1,
  fontSize: '3em',
  fontWeight: 400,
});

export const panels = style({
  flexWrap: 'nowrap',
  overscrollBehavior: 'none',
  flexDirection: 'column',
  ...responsiveStyle({
    mobile: {
      display: 'flex',
    },
    desktop: {
      display: 'none',
    },
  }),
});
