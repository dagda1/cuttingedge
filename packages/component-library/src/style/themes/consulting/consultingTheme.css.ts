import type { Tokens } from '../tokens';
import { tokens } from './tokens';
import { createTheme } from '@vanilla-extract/css';
import { vars } from '../vars.css';
import { makeTheme } from '../make-theme';

export const consultingTheme = createTheme(vars, makeTheme(tokens as Tokens));
