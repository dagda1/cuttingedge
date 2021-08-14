import { tokens } from './tokens';
import { createTheme } from '@vanilla-extract/css';
import { vars } from '../vars.css';
import { makeTheme } from '../make-theme';
import type { Tokens } from '../tokens';

export const cuttingTheme = createTheme(vars, makeTheme(tokens as Tokens));
