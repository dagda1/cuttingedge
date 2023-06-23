import { globalStyle, style } from '@vanilla-extract/css';
import { palette, responsiveStyle, vars } from '@cutting/component-library';

export const main = style({
  flex: 1,
  position: 'relative',
});

export const root = style({
  display: 'flex',
  justifyContent: 'flex-end',
  ...responsiveStyle({
    mobile: {
      position: 'relative',
      display: 'none',
    },
    desktop: {
      position: 'static',
      display: 'block',
    },
  }),
});

export const navList = style({
  display: 'flex',
  alignItems: 'center',
  margin: 0,
});

globalStyle('header a:hover,footer a:hover', {
  color: palette.gray300,
});

globalStyle(`${navList} li`, {
  padding: 0,
  marginRight: vars.space['small'],
});

globalStyle(`${navList} ul`, {
  padding: 0,
});

globalStyle(`${navList} li a`, {
  padding: `${vars.space['xxsmall']} ${vars.space['small']}`,
  width: '100%',
  background: 'inherit',
  boxShadow: 'none',
  ...responsiveStyle({
    mobile: {
      display: 'none',
    },
    desktop: {
      display: 'inline',
    },
  }),
});

export const left = style({
  display: 'grid',
  ...responsiveStyle({
    mobile: {
      gridTemplateColumns: 'auto',
      justifyContent: 'flex-start',
    },
    tablet: {
      gridTemplateColumns: 'repeat(2, auto)',
      flex: '1',
      alignItems: 'center',
    },
  }),
});

export const logo = style({
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flex: 1,
});

globalStyle(`${logo} h2`, {
  color: palette.gray600,
});

export const mobileMenu = style({
  ...responsiveStyle({
    mobile: {
      display: 'block',
    },
    desktop: {
      display: 'none',
    },
  }),
});

globalStyle(`${mobileMenu} > div`, {});

export const mobileNav = style({
  background: palette.gray800,
  color: palette.white,
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 3,
  display: 'flex',
});

globalStyle(`.hamburger-react`, {
  zIndex: 4,
});

globalStyle(`${mobileNav} ul`, {
  padding: `${vars.space['large']} vars.space['small']`,
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
});

globalStyle(`${mobileNav} li`, {
  border: `1px solid ${palette.white}`,
  paddingTop: `${vars.space['xxsmall']} !important`,
  paddingBottom: `${vars.space['small']} !important`,
  marginBottom: `${vars.space['xxsmall']} !important`,
  paddingLeft: `${vars.space['xxsmall']} !important`,
});

globalStyle(`${mobileNav} a`, {
  display: 'block',
  width: '100%',
  height: '100%',
  marginTop: vars.space['small'],
  fontWeight: 'bold',
  textTransform: 'uppercase',
});

globalStyle(`${mobileNav} li:hover`, {
  background: palette.gray200,
  color: `${palette.white} !important`,
});

export const work = style({
  position: 'absolute',
  right: '8px',
});
