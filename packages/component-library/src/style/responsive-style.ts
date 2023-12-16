import type { StyleRule } from '@vanilla-extract/css';
import { breakpoints } from './breakpoints.js';
import { omit, mapValues } from '@cutting/util';

type CSSProps = Omit<StyleRule, '@media' | '@supports'>;

export const breakpointQuery = mapValues(omit(breakpoints, 'mobile'), (bp) => `screen and (min-width: ${bp}px)`);

const makeMediaQuery = (breakpoint: keyof typeof breakpointQuery) => (styles?: CSSProps) =>
  !styles || Object.keys(styles).length === 0
    ? {}
    : {
        [breakpointQuery[breakpoint]]: styles,
      };

const mediaQuery = {
  tablet: makeMediaQuery('tablet'),
  desktop: makeMediaQuery('desktop'),
  wide: makeMediaQuery('wide'),
  extraWide: makeMediaQuery('extraWide'),
};

interface ResponsiveStyle {
  mobile?: CSSProps;
  tablet?: CSSProps;
  desktop?: CSSProps;
  wide?: CSSProps;
  extraWide?: CSSProps;
}

export const responsiveStyle = ({ mobile, tablet, desktop, wide }: ResponsiveStyle): StyleRule => {
  return {
    ...(omit(mobile, '@media' as keyof CSSProps) ?? {}),
    ...(tablet || desktop || wide
      ? {
          '@media': {
            ...mediaQuery.tablet(tablet ?? {}),
            ...mediaQuery.desktop(desktop ?? {}),
            ...mediaQuery.wide(wide ?? {}),
            ...mediaQuery.extraWide(wide ?? {}),
          },
        }
      : {}),
  };
};
