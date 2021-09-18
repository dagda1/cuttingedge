import { composeStyles, globalFontFace, style } from '@vanilla-extract/css';
import { rem } from 'polished';
import { atoms } from '../src/style/atoms/sprinkles.css';
import { vars } from '../src/style/themes/vars.css';

globalFontFace('futura-pt', {
  src: `url("https://use.typekit.net/af/ae4f6c/000000000000000000010096/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff2"),url("https://use.typekit.net/af/ae4f6c/000000000000000000010096/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff"),url("https://use.typekit.net/af/ae4f6c/000000000000000000010096/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("opentype");`,
  fontDisplay: 'auto',
  fontStyle: 'normal',
  fontWeight: '500',
});

globalFontFace('Ilisarniq', {
  src: `url('https://assets.website-files.com/57e173fc691a682976f5ad5c/5cf80bc40491204e655d8711_Ilisarniq-Black.ttf') format('truetype')`,
  fontDisplay: 'auto',
  fontStyle: 'normal',
  fontWeight: '500',
});

export const wrap = composeStyles(
  style({
    maxWidth: rem(1008),
    paddingLeft: vars.space['2x'],
    paddingRight: vars.space['3x'],
    margin: '0 auto',
  }),
);

export const background = style({
  background: vars.backgroundColor.body,
});

export const layout = style({
  display: 'flex',
  flex: 1,
  textAlign: 'left',
  flexFlow: 'row wrap',
});

export const item = composeStyles(
  atoms({
    paddingLeft: {
      mobile: '1x',
      tablet: '3x',
    },
    display: {
      mobile: 'block',
      tablet: 'inline-block',
    },
    flex: {
      mobile: 'auto',
      tablet: '1 0 auto',
    },
  }),
);
