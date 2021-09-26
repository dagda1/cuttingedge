import { DeepPartial, mapValues } from '@cutting/util';
import type { Tokens } from './tokens';
import { tokens as defaultTokens } from './tokens';
import deepmerge from 'deepmerge';

const scaleCreator = (scale: 'px' | 'rem') => (v: string | number) => `${v}${scale}`;

const px = scaleCreator('px');
const rem = scaleCreator('rem');

type Convert<P, O> = { [K in keyof P]: { [K1 in keyof P[K]]: O } };

type Responsive = {
  mobile: number;
  tablet: number;
  desktop: number;
};

const convertTypography = <K extends keyof Tokens['typography']['headings'] | keyof Tokens['typography']['text']>(
  o: Record<K, Responsive>,
  f: (a: string | number) => string,
) =>
  Object.keys(o).reduce((acc, curr) => {
    const key = curr as keyof typeof o;
    const current = o[key];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    acc[key] = mapValues(current, f as any);

    return acc;
  }, {} as Convert<typeof o, string>);

const ratio = 1.3;
const getLineHeight = (fontSize: number | string) => rem(Number(fontSize) * ratio);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const makeTheme = (customTokens: DeepPartial<Tokens> = {}) => {
  const { ...tokens } = deepmerge(defaultTokens, customTokens) as Tokens;
  const { foreground, background } = tokens.color;

  const resolvedTokens = {
    borderRadius: tokens.border.radius,
    borderColor: tokens.border.color,
    borderWidth: mapValues(tokens.border.width, px),
    foregroundColor: foreground,
    backgroundColor: {
      ...background,
    },
    fontFamily: {
      ...tokens.typography.fonts,
    },
    colors: {
      ...tokens.colors,
    },
    fonts: {
      headings: convertTypography(tokens.typography.headings, rem),
      text: convertTypography(tokens.typography.text, rem),
    },
    lineHeight: {
      headings: convertTypography(tokens.typography.headings, getLineHeight),
      text: convertTypography(tokens.typography.text, getLineHeight),
    },
    fontWeight: mapValues(tokens.typography.fontWeight, String),
    inlineFieldSize: {
      standard: '2.5rem',
      small: '1.25rem',
    },
    space: {
      ...tokens.space,
    },
    width: {
      ...tokens.width,
    },
    inputWidth: {
      ...tokens.inputWidth,
    },
    headings: {
      color: tokens.headings.color,
    },
    accessibility: {
      visibleFocus: {
        outline: `${tokens.accessibility.outlineWidth} solid ${tokens.accessibility.elementFocusColor}`,
        outlineOffset: tokens.accessibility.outlineOffset,
      },
      linkFocus: {
        outline: `3px solid transparent`,
        color: tokens.accessibility.linkFocusColor,
        backgroundColor: tokens.accessibility.elementFocusColor,
        boxShadow: `0 -2px #fd0, 0 4px ${tokens.accessibility.boxShadowColor}`,
        textDecoration: `none`,
        // backgroundColor: ,
        // outline: `${tokens.accessibility.outlineWidth} solid ${tokens.accessibility.elementFocusColor}`,
        // color: tokens.accessibility.linkFocusColor,
      },
      accessibleOutline: {
        backgroundColor: tokens.accessibility.accessibleOutlineColor,
        outline: `${tokens.accessibility.outlineWidth} solid ${tokens.accessibility.accessibleOutlineColor}`,
      },
    },
    invalid: {
      color: tokens.color.foreground.error,
    },
    links: {
      ...tokens.links,
    },
    buttons: {
      textTransform: tokens.buttons.textTransform,
      fontWeight: tokens.buttons.fontWeight,
      width: {
        ...tokens.buttons.width,
      },
      primary: {
        border: `${tokens.buttons.primary.borderWidth} solid ${tokens.buttons.primary.borderWidth}`,
        background: tokens.buttons.primary.background,
        color: tokens.buttons.primary.color,
        padding: tokens.buttons.primary.padding,
        ':hover': {
          background: tokens.buttons.primary.focusColor,
        },
      },
      secondary: {
        border: `${tokens.buttons.secondary.borderWidth} solid ${tokens.buttons.secondary.borderWidth}`,
        background: tokens.buttons.secondary.background,
        color: tokens.buttons.secondary.color,
        padding: tokens.buttons.secondary.padding,
        ':hover': {
          background: tokens.buttons.secondary.focusColor,
        },
      },
      warning: {
        border: `${tokens.buttons.warning.borderWidth} solid ${tokens.buttons.warning.borderWidth}`,
        background: tokens.buttons.warning.background,
        color: tokens.buttons.warning.color,
        padding: tokens.buttons.secondary.padding,
        ':hover': {
          background: tokens.buttons.warning.focusColor,
        },
      },
    },
    radios: {
      ...tokens.radios,
    },
  } as const;

  return resolvedTokens;
};

export type FontWeight = keyof ReturnType<typeof makeTheme>['fontWeight'];
