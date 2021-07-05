import { createTheme } from '@vanilla-extract/css';
import { vars } from '../vars.css';
import { makeTheme } from '../make-theme';
import { tokens } from './tokens';
import { Tokens } from '../tokens';

export const alternativeTheme = createTheme(vars, makeTheme(tokens as Tokens));
