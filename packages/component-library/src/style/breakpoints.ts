export const breakpointNames = ['mobile', 'tablet', 'desktop'] as const;

export const breakpoints = {
  mobile: 0,
  tablet: 50,
  desktop: 62,
} as const;

export type Breakpoint = keyof typeof breakpoints;
