import { createTheme } from '@vanilla-extract/css';

import { makeTheme } from '~/style/themes/make-theme';
import type { Tokens } from '~/style/themes/tokens';
import { vars } from '~/style/themes/vars.css';

import { tokens } from './tokens';

export const salesTheme = createTheme(vars, makeTheme(tokens as Tokens));
