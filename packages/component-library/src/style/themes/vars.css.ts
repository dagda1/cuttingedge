import { createThemeContract } from '@vanilla-extract/css';

import { makeVanillaTheme } from './make-vanilla-theme';
import { tokens } from './docs/tokens';

export const vars = createThemeContract(makeVanillaTheme(tokens));
