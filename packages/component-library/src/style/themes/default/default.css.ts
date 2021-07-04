import { createTheme } from '@vanilla-extract/css';
import { vars } from '../vars.css';
import { makeVanillaTheme } from '../make-vanilla-theme';

export const defaultTheme = createTheme(vars, makeVanillaTheme());
