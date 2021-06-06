import { createAtomicStyles, createAtomsFn } from '@vanilla-extract/sprinkles';
import { vars } from './themes.css';

const space = vars.spacing;
export type Space = keyof typeof space;

export const lightMode = 'light';
export const darkMode = 'dark';

const colorStyles = createAtomicStyles({
  conditions: {
    lightMode: { selector: `.${lightMode} &` },
    darkMode: {},
  },
  defaultCondition: 'darkMode',
  properties: {
    background: vars.palette,
    color: vars.palette,
  },
});

export const atoms = createAtomsFn(colorStyles);

export type Atoms = Parameters<typeof atoms>[0];
