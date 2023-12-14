import type { Tokens } from '~/style/themes/tokens.js';
import { tokens } from './tokens.js';
import { createTheme } from '@vanilla-extract/css';
import { vars } from '~/style/themes/vars.css.js';
import { makeTheme } from '~/style/themes/make-theme.js';

export const supportTheme = createTheme(vars, makeTheme(tokens as Tokens));
