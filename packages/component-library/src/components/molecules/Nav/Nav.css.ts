import { globalStyle, style } from '@vanilla-extract/css';
import { atoms } from '~/style/atoms/atoms';
import { palette } from '~/style/palette.css';
import { responsiveStyle } from '~/style/responsive-style';
import { vars } from '~/style/themes/vars.css';

export const container = style({});

globalStyle(`${container} h2`, {
  textShadow: `0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ffffff, 0 0 30px #ffffff, 0 0 40px #ffffff, 0 0 55px #ffffff, 0 0 75px #ffffff`,
});

export const currentColor = style({
  color: vars.foregroundColor.neutral,
});

export const navList = style({});

export const expandable = style([
  {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    overflow: 'auto',
    backgroundColor: palette.black,
    zIndex: 10,
    padding: '1rem',
    width: '100vw',
    height: '100vh',
    transition: 'transform 0.3s ease-in-out',
    transform: 'translateX(-100%)',
    ...responsiveStyle({
      mobile: {
        left: 0,
      },
      tablet: {
        left: '-20px',
      },
    }),
  },
  atoms({
    paddingY: 'large',
  }),
]);

export const expanded = style([
  {
    transform: 'translateX(0)',
  },
]);

globalStyle(`${expanded} > li, ${expanded} span`, {
  width: '100%',
  display: 'block',
});

globalStyle(`${expanded} a, ${expanded} button`, {
  border: `1px solid ${palette.white}`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: `${vars.space['medium']} !important`,
  paddingBottom: `${vars.space['medium']} !important`,
  width: '100%',
  height: '100%',
  marginTop: vars.space['medium'],
  fontWeight: 'bold',
  textTransform: 'uppercase',
});

globalStyle(`${expanded} a:hover`, {
  background: palette.gray200,
  color: `${palette.white} !important`,
});

export const menuMobileButtonContainer = style([
  {
    verticalAlign: 'middle',
  },
  atoms({
    marginLeft: 'xxsmall',
    marginRight: 'large',
  }),
]);

export const noMobile = style({
  display: 'none !important',
  ...responsiveStyle({
    mobile: {},
    tablet: {
      display: 'inline',
    },
  }),
});

// globalStyle(`${expanded} li`, {
//   zIndex: 300,
//   border: '10px solid blue',
//   width: '100%',
//   pointerEvents: 'all',
// });

// globalStyle(`${expanded} a`, {
//   zIndex: 300,
//   border: '10px solid green',
//   width: '100%',
//   height: '100%',
//   display: 'block',
//   pointerEvents: 'all',
// });
