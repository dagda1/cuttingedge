import { createTheme } from '@vanilla-extract/css';

import { makeTheme } from '~/style/themes/make-theme';
import { vars } from '~/style/themes/vars.css';

import { tokens } from './tokens';

export const cuttingTheme = createTheme(vars, makeTheme(tokens));
