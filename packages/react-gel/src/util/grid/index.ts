import { map } from 'lodash';
import { BreakPointProps } from '../../types';

export const gridItemAdapter = (props: BreakPointProps): string =>
  map<BreakPointProps, string>(props, (value, breakpoint) => {
    if (!value) { return ''; }
    const className = breakpoint.toString() === 'w' ? value : `${value}@${breakpoint}`;

    return `gel-${className}`;
  }).join(' ');
