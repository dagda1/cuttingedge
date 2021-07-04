import { createThemeContract } from '@vanilla-extract/css';
import { makeTheme } from './make-theme';
import { tokens } from './tokens';

export const vars = createThemeContract(makeTheme(tokens));
