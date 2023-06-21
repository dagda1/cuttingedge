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

export const expandable = style([
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'auto',
    backgroundColor: palette.black,
    zIndex: 10,
    padding: '1rem',
    width: '100vw',
    height: '100vh',
    transition: 'transform 0.3s ease-in-out',
    transform: 'translateX(-100%)',
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

globalStyle(`${expanded} ul`, {
  padding: `${vars.space['large']}`,
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
});

globalStyle(`${expanded} li`, {
  border: `1px solid ${palette.white}`,
  paddingTop: `${vars.space['xsmall']} !important`,
  paddingBottom: `${vars.space['medium']} !important`,
  marginBottom: `${vars.space['xsmall']} !important`,
  paddingLeft: `${vars.space['xsmall']} !important`,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

globalStyle(`${expanded} a`, {
  display: 'block',
  width: '100%',
  height: '100%',
  marginTop: vars.space['medium'],
  fontWeight: 'bold',
  textTransform: 'uppercase',
});

globalStyle(`${expanded} li:hover`, {
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
