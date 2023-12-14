import { createThemeContract } from '@vanilla-extract/css';
import { makeTheme } from './make-theme.js';
import { tokens } from './tokens.js';

export const vars = createThemeContract(makeTheme(tokens));
