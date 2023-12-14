import type { Tokens } from '~/style/themes/tokens';
import { tokens } from './tokens';
import { createTheme } from '@vanilla-extract/css';
import { vars } from '~/style/themes/vars.css.js';
import { makeTheme } from '~/style/themes/make-theme';

export const salesTheme = createTheme(vars, makeTheme(tokens as Tokens));
