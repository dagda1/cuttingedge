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

globalStyle(`${expanded} li`, {
  marginBottom: vars.space.medium,
  display: 'block',
  width: '100%',
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
  fontWeight: 'bold',
  textTransform: 'uppercase',
});

globalStyle(`${expanded} li ul li`, {
  paddingBottom: 0,
  paddingTop: 0,
  marginBottom: 0,
  borderBottom: `1px solid ${vars.foregroundColor.secondary}`,
});

globalStyle(`${expanded} li ul li a`, {
  border: 'none',
  paddingBottom: 0,
  paddingTop: 0,
  marginTop: 0,
  height: 0,
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
