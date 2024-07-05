import { createTheme } from '@vanilla-extract/css';

import { makeTheme } from '~/style/themes/make-theme';
import { vars } from '~/style/themes/vars.css';

export const defaultTheme = createTheme(vars, makeTheme());
