import { atoms, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({});

globalStyle(`${container} section`, { paddingTop: 0 });
globalStyle(`${container} h1`, { textAlign: 'center' });
globalStyle(`${container} p`, { textAlign: 'center' });

export const benefits = style([
  atoms({
    display: {
      mobile: 'block',
      tablet: 'flex',
    },
  }),
]);

globalStyle(`${benefits} > div`, {
  flex: 1,
  padding: '0 1rem 1rem',
});

export const form = style({
  display: 'flex',
  justifyContent: 'center',
});

globalStyle(`${form} fieldset`, {
  paddingLeft: vars.space['small'],
  marginTop: vars.space['small'],
  marginBottom: vars.space['small'],
});
