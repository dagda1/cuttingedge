import { map } from 'lodash';

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

export const gridItemAdapter = (props: BreakPointProps): string =>
  map<BreakPointProps, string>(props, (value, breakpoint) => {
    if (!value) return '';
    const className = breakpoint.toString() === 'w' ? value : `${value}@${breakpoint}`;

    return `gel-${className}`;
  }).join(' ');
