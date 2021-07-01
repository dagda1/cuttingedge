import { Breakpoint } from './breakpoints';
import { isEqual, omit } from '@cutting/util';
import { Style } from './types';

type RequiredTokens = { breakpoint: Record<Breakpoint, number> };
type StyleWithoutMediaQueries = Exclude<Style['@media'], undefined>[string];

interface ResponsiveStyle {
  mobile?: StyleWithoutMediaQueries;
  tablet?: StyleWithoutMediaQueries;
  desktop?: StyleWithoutMediaQueries;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const makeThemeUtils = (tokens: RequiredTokens) => {
  const makeMediaQuery = (breakpoint: Breakpoint) => (styles: StyleWithoutMediaQueries) =>
    !styles || Object.keys(styles).length === 0
      ? {}
      : {
          [`screen and (min-width: ${tokens.breakpoint[breakpoint]}px)`]: styles,
        };

  const mediaQuery = {
    tablet: makeMediaQuery('tablet'),
    desktop: makeMediaQuery('desktop'),
  };

  const responsiveStyle = ({ mobile, tablet, desktop }: ResponsiveStyle): Style => {
    const mobileStyles = omit(mobile, '@media' as keyof typeof mobile);

    const tabletStyles = !tablet || isEqual(tablet, mobileStyles) ? null : tablet;

    const stylesBelowDesktop = tabletStyles || mobileStyles;
    const desktopStyles = !desktop || isEqual(desktop, stylesBelowDesktop) ? null : desktop;

    const hasMediaQueries = tabletStyles || desktopStyles;

    return {
      ...mobileStyles,
      ...(hasMediaQueries
        ? {
            '@media': {
              ...(tabletStyles ? mediaQuery.tablet(tabletStyles) : {}),
              ...(desktopStyles ? mediaQuery.desktop(desktopStyles) : {}),
            },
          }
        : {}),
    };
  };

  return { responsiveStyle };
};
