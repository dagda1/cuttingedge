/* eslint-disable @typescript-eslint/no-explicit-any */
import { mapValues, omit } from '@cutting/util';
import type { StyleRule } from '@vanilla-extract/css';
import { breakpoints } from './breakpoints';
import rem from 'polished/lib/helpers/rem.js';

type CSSProps = Omit<StyleRule, '@media' | '@supports'>;

export const breakpointQuery = mapValues(
  omit(breakpoints, 'mobile' as any),
  (bp) => `screen and (min-width: ${rem(bp)})`,
) as {
  readonly tablet: string;
  readonly desktop: string;
  readonly wide: string;
};

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
};

interface ResponsiveStyle {
  mobile?: CSSProps;
  tablet?: CSSProps;
  desktop?: CSSProps;
  wide?: CSSProps;
}

export const responsiveStyle = ({ mobile, tablet, desktop, wide }: ResponsiveStyle): StyleRule => ({
  ...omit(mobile as CSSProps, '@media' as any),
  ...(tablet || desktop || wide
    ? {
        '@media': {
          ...mediaQuery.tablet(tablet ?? {}),
          ...mediaQuery.desktop(desktop ?? {}),
          ...mediaQuery.wide(wide ?? {}),
        },
      }
    : {}),
});
