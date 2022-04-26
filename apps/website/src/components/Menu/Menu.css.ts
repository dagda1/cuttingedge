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

globalStyle(`${mobileButtonContainer} svg`, {
  marginBottom: 0,
});

globalStyle(`${container} li a`, {
  position: 'relative',
  top: '5px',
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
    fontWeight: 'bold',
    fontSize: '1.25rem',
    padding: '.5rem',
    ...responsiveStyle({
      mobile: {},
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
  fontWeight: 'bold',
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

globalStyle(`${logoContainer} a`, {
  display: 'inline-block',
  marginRight: vars.space['1x'],
});

globalStyle(`${logoContainer} a:focus svg`, {
  background: vars.links.color.hover,
});

export const active = style({
  color: vars.links.color.active,
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
//   @include py(2);

globalStyle(`${expanded} ul li`, {
  paddingTop: vars.space['1x'],
  paddingBottom: vars.space['2x'],
  marginBottom: vars.space['1x'],
  paddingLeft: vars.space['1x'],
  color: '#fff',
});

export const horizontal = style({
  display: 'block',
  selectors: {
    [`&:hover`]: {
      color: palette.black,
      backgroundColor: palette.white,
    },
  },
});

globalStyle(`${horizontal} a`, {
  display: 'block',
});

globalStyle(`${horizontal} a:hover`, {
  color: palette.black,
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

export const mobile = style({});
export const closeButton = style({});

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
}),
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
    fontWeight: 'normal',
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
