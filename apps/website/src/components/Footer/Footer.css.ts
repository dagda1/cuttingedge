import { style, globalStyle } from '@vanilla-extract/css';

// globalStyle('footer', {
//   display: 'grid',
//   //   flexShrink: 0,
//   width: '100%',
//   border: '10px solid red',
//   gridTemplateColumns: '1fr 1fr',
//   //   ...responsiveStyle({
//   //     mobile: {
//   //       flexDirection: 'column',
//   //     },
//   //     tablet: {
//   //       flexDirection: 'row',
//   //     },
//   //     wide: {},
//   //   }),
// });

export const links = style({});
// {
//   textAlign: 'center',
//   flex: '0 0 50%',
// },
// atoms({
//   textAlign: {
//     mobile: 'center',
//     tablet: 'left',
//   },
// }),
// ]);

globalStyle(`${links} ul`, {
  // display: 'grid',
  // height: '100%',
  // placeItems: 'center',
});
globalStyle(`${links} ul li`, {
  // display: 'block',
});

export const seal = style({
  // paddingTop: 0,
  // position: 'relative',
  // top: '3px',
});

export const contact = style([
  // atoms({
  //   textAlign: {
  //     mobile: 'center',
  //     tablet: 'right',
  //   },
  // }),
]);

globalStyle(`${contact} li`, {
  // display: 'inline-block',
  // marginRight: vars.space['xsmall'],
  // paddingRight: vars.space['xsmall'],
  // borderRight: '1px solid #333',
  height: '20px',
  lineHeight: '21px',
});

globalStyle(`${contact} a`, {
  height: '20px',
  lineHeight: '21px',
});

globalStyle(`${contact} li a`, {
  display: 'inline-block',
  width: '20px',
});

globalStyle(`${contact} svg`, {
  // width: '100%',
  // height: 'auto',
});

export const email = style({
  // display: 'inline-block',
  // verticalAlign: 'top',
  // position: 'relative',
  // top: '-3px',
});

export const copyright = style({
  // marginTop: '-15px',
});

globalStyle('footer', {});
