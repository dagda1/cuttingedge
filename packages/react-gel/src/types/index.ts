export enum BreakPoint {
  S = 's',
  M = 'm',
  L = 'l',
  XL = 'xl',
  XXL = 'xxl'
}

export type BreakPointProps = { [K in BreakPoint]?: string } & {
  w?: string;
};
