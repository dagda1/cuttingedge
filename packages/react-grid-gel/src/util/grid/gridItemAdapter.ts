import { map } from 'lodash';

export enum BreakPoint {
  W = 'w',
  S = 's',
  M = 'm',
  L = 'l',
  XL = 'xl',
  XXL = 'xxl'
}

export type BreakPointProps = { [K in BreakPoint]?: string } & {
  width?: string;
};

export const gridItemAdapter = (props: BreakPointProps): string =>
  map<string, string>(props, (value, breakpoint) => {
    if (!value) return '';
    const className = breakpoint === BreakPoint.W ? value : `${value}@${breakpoint}`;

    return `gel-${className}`;
  }).join(' ');
