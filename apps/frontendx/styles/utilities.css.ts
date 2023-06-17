import { responsiveStyle, palette, atoms, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';
import { root } from '../components/LinkWrapper/LinkWrapper.css';

export const fullHeight = style({
  minHeight: '100vh',
  position: 'relative',
});

export const pushDown = style([
  {
    flex: 1,
    ...responsiveStyle({
      mobile: {
        marginTop: vars.space['xlarge'],
      },
      tablet: {
        marginTop: vars.space['large'],
      },
    }),
  },
]);

globalStyle(`${pushDown} a:not(${root})`, {
  color: palette.blue500,
});

export const expand = style({
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const pad = style([atoms({ marginY: 'large' })]);
