import { BreakPointProps } from '../../types';

export const gridItemAdapter = (props: BreakPointProps): string => {
  return Object.entries(props)
    .map(([breakpoint, value]) => {
      if (!value) {
        return '';
      }

      const className =
        breakpoint.toString() === 'w' ? value : `${value}@${breakpoint}`;

      return `gel-${className}`;
    })
    .join(' ');
};
