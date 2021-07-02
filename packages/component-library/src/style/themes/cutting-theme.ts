import { createTheme } from '@vanilla-extract/css';
import { tokens } from './docs/tokens';
import { makeVanillaTheme } from './make-vanilla-theme';

import { vars } from './vars.css';

export const defaultTheme = createTheme(vars, makeVanillaTheme(tokens));
