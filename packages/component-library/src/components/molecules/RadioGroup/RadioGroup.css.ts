import { globalStyle, style } from '@vanilla-extract/css';
import { screenReaderOnly } from 'src/style/accessibility.css';

export const fieldset = style({
  border: 'none',
  padding: 0,
});

globalStyle(`${fieldset} legend`, {
  ...screenReaderOnly,
});

export const inline = style({
  display: 'flex',
});
