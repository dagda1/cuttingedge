import { createTheme } from '@vanilla-extract/css';
import { vars } from '~/style/themes/vars.css.js';
import { makeTheme } from '~/style/themes/make-theme.js';

export const defaultTheme = createTheme(vars, makeTheme());
