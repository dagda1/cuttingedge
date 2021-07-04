import { createThemeContract } from '@vanilla-extract/css';
import { makeVanillaTheme } from './make-vanilla-theme';
import { tokens } from './tokens';

export const vars = createThemeContract(makeVanillaTheme(tokens));
