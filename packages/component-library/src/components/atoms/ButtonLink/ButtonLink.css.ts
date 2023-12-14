import { globalStyle, style } from '@vanilla-extract/css';
import * as styles from '../TextLink/TextLink.css.js';

export const main = style(
  [
    {
      padding: '14px 22px',
      display: 'inline-block',
    },
    styles.base,
  ],
  styles.underline,
);

globalStyle(`${main} span`, {
  padding: 0,
  margin: 0,
});
