import { createTheme } from '@vanilla-extract/css';
import { vars } from '~/style/themes/vars.css';
import { makeTheme } from '~/style/themes/make-theme';

export const defaultTheme = createTheme(vars, makeTheme());
