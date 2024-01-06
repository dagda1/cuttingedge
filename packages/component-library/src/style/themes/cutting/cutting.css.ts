import { tokens } from './tokens';
import { createTheme } from '@vanilla-extract/css';
import { vars } from '~/style/themes/vars.css';
import { makeTheme } from '~/style/themes/make-theme';

export const cuttingTheme = createTheme(vars, makeTheme(tokens));
