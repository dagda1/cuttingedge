import type { Properties } from 'csstype';

import type { Breakpoint } from '~/style/breakpoints';
import { responsiveStyle } from '~/style/responsive-style';

export const mapToProperty =
  <Property extends keyof Properties<string | number>>(property: Property, breakpoint?: Breakpoint) =>
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  (value: string | number) => {
    const styleRule = { [property]: value };

    return breakpoint ? responsiveStyle({ [breakpoint]: styleRule }) : styleRule;
  };
