import { tokens } from './tokens.js';
import { createTheme } from '@vanilla-extract/css';
import { vars } from '~/style/themes/vars.css.js';
import { makeTheme } from '~/style/themes/make-theme.js';

export const cuttingTheme = createTheme(vars, makeTheme(tokens));
