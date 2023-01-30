import { palette, responsiveStyle, vars, atoms } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const full = style({
  display: 'flex',
  justifyContent: 'center',
});

export const container = style({});

globalStyle(`${container} h2`, {
  marginTop: 0,
  marginBottom: 0,
  paddingTop: 0,
  paddingBottom: 0,
  textShadow: `0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ffffff, 0 0 30px #ffffff, 0 0 40px #ffffff, 0 0 55px #ffffff, 0 0 75px #ffffff`,
});

globalStyle(`${container} ul`, {
  marginBottom: 0,
});

globalStyle(`${container} svg path`, {
  fill: palette.white,
});

globalStyle(`${container} ul li`, {
  display: 'inline-block',
  verticalAlign: 'middle',
  position: 'relative',
});

globalStyle(`${container} li:not(:last-of-type)`, {
  ...responsiveStyle({
    mobile: {
      marginRight: 'auto',
    },
    tablet: {
      marginRight: vars.space['2x'],
    },
  }),
});
export const mobileButtonContainer = style({
  verticalAlign: 'middle',
});

globalStyle(`${mobileButtonContainer} button`, {
  position: 'absolute',
  top: '-1rem',
});

globalStyle(`${mobileButtonContainer} svg`, {
  marginBottom: 0,
});

globalStyle(`${container} a:hover`, {
  color: palette.white,
});

globalStyle(`${container} li h2 a`, {
  top: 0,
});

export const contact = style([
  {
    backgroundColor: '#FF8B45',
    borderRadius: '1rem',
    fontSize: '1.25rem',
    ...responsiveStyle({
      mobile: {
        padding: '.5rem .75rem',
      },
      tablet: {
        top: '0 !important',
        fontSize: '2rem',
        padding: '1rem 2rem',
      },
    }),
  },
]);

globalStyle(`li${contact} a`, {
  color: palette.white,
  ...responsiveStyle({
    mobile: { position: 'static' },
    tablet: { position: 'relative', top: '1px' },
  }),
});

globalStyle(`${container} div:not(.expanded):not(${contact}) ul li`, {
  ...responsiveStyle({
    mobile: {
      marginRight: vars.space['1x'],
    },
    tablet: {
      marginRight: vars.space['2x'],
    },
  }),
});

export const logoContainer = style({
  width: '75px',
  display: 'inline-block',
  marginRight: 0,
  marginLeft: '-19px',
  ...responsiveStyle({
    mobile: {
      width: '75px',
    },
    tablet: {
      width: '100px',
    },
  }),
});

export const selected = style({
  width: '100%',
  border: `1px solid ${vars.colors.error}`,
});

globalStyle(`${logoContainer} svg`, {
  width: '100%',
  height: 'auto',
});

export const active = style({
  color: '#ffffff',
  fontStyle: 'bold',
});

globalStyle(`${contact} ${active}`, {
  background: 'inherit',
  padding: '0',
});

export const name = style({
  color: 'inherit',
});

export const expandable = style({
  display: 'none',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  overflow: 'auto',
  backgroundColor: palette.black,
  zIndex: 10,
  padding: '1rem',
});

export const expanded = style([
  {
    display: 'block',
  },
  atoms({
    paddingY: '2x',
  }),
]);

export const mobile = style({});
export const closeButton = style({});

globalStyle('.szh-menu__item', {
  border: `1px solid ${palette.white}`,
  padding: vars.space['2x'],
  width: '100%',
});

globalStyle('.menuitem', {
  width: '100%',
});

globalStyle(`${expanded} ul li a, ${expanded} ul li:not(${closeButton}) button`, {
  paddingTop: vars.space['1x'],
  paddingBottom: vars.space['2x'],
  marginBottom: vars.space['1x'],
  paddingLeft: vars.space['1x'],
  display: 'flex',
  justifyContent: 'center',
  flex: 1,
});

export const horizontal = style({
  display: 'block',
  selectors: {
    [`&:hover`]: {
      color: palette.gray300,
    },
  },
});

globalStyle(`${horizontal} a`, {
  display: 'block',
});

globalStyle(`li.${horizontal}:not(${contact})`, {
  ...responsiveStyle({
    mobile: { display: 'none' },
    tablet: {
      display: 'inline-block',
    },
  }),
});

export const menuMobileButtonContainer = style([
  {
    verticalAlign: 'middle',
  },
  atoms({
    marginLeft: '1x',
    marginRight: '2x',
  }),
]);

globalStyle(`${horizontal}${expanded}`, {
  display: 'block',
});

globalStyle(`${horizontal}${expanded} a`, {
  width: '100%',
  display: 'inline-block',
});

globalStyle(`ul li${horizontal}${mobile}`, {
  display: 'flex',
  border: `1px solid ${palette.white}`,
  marginBottom: vars.space['2x'],
  color: palette.white,
  justifyContent: 'center',
});

globalStyle(`ul li${horizontal}${mobile}${closeButton}`, {
  display: 'flex',
  justifyContent: 'flex-end',
});

globalStyle(`ul li${horizontal}${mobile}${closeButton} button`, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: vars.space['2x'],
  borderRadius: '32px',
  background: palette.white,
  color: '#141414',
  fontSize: '18px',
  height: '32px',
  left: '12px',
  top: '8px',
  transition: 'none',
  width: '32px',
});

globalStyle(`ul li${horizontal}${mobile}${closeButton} button:before`, {
  position: 'absolute',
  // -webkit-transform: translate(-50%, -50%),
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  // -webkit-font-smoothing: antialiased,
  fontFamily: 'icomoon',
  fontStyle: 'normal',
  fontVariant: 'normal',
  lineHeight: 1,
  textIndent: 0,
  textTransform: 'none',
});

export const noMobile = style({
  display: 'none !important',
  ...responsiveStyle({
    mobile: {},
    tablet: {
      display: 'inline',
    },
  }),
});

export const dropdown = style({
  border: 0,
  background: 'transparent',
  ...responsiveStyle({
    ...vars.text.body,
  }),
  textDecoration: vars.links.decoration.link,
  color: vars.links.color.link,
  textUnderlineOffset: '.1em',
  lineHeight: vars.links.lineHeight,
  cursor: 'pointer',
  fontFamily: vars.fontFamily.body,
  zIndex: 15,
});

export const VizMenuItem = style({
  background: palette.white,
  zIndex: 15,
  selectors: {
    [`&:hover,&:focus`]: {
      background: `${palette.yellow400} !important`,
    },
  },
});

export const submenu = style({
  marginBottom: '0 !important',
  color: `${palette.black} !important`,
  selectors: {
    [`&:hover,&:focus`]: {
      color: '#ffffff !important',
      textDecorationThickness: `max(3px, .1875rem, .12em)`,
    },
  },
});
