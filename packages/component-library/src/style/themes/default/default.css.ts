import { createTheme } from '@vanilla-extract/css';
import { vars } from '../vars.css';
import { makeTheme } from '../make-theme';

export const defaultTheme = createTheme(vars, makeTheme());
