export const breakpoints = {
  mobile: 0,
  tablet: 740,
  desktop: 992,
  wide: 1500,
} as const;

export type Breakpoint = keyof typeof breakpoints;

export const breakpointNames = ['mobile', 'tablet', 'desktop', 'wide'] as const;

export interface Dimensions {
  width: number;
  height: number;
}

export function getCurrentBreakpoint({ width }: Dimensions): Breakpoint {
  if (width < breakpoints.tablet) {
    return 'mobile';
  }

  if (width < breakpoints.desktop) {
    return 'tablet';
  }

  if (width < breakpoints.wide) {
    return 'desktop';
  }

  return 'wide';
}
