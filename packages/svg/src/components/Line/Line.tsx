import cx from 'classnames';
import type { Ref } from 'react';

import type { AddSVGProps, Point } from '../../types/types';

export type LineProps = {
  className?: string;
  innerRef?: Ref<SVGLineElement>;
  fill?: string;
  from?: Point;
  to?: Point;
};

export function Line({
  from = { x: 0, y: 0 },
  to = { x: 1, y: 1 },
  fill = 'transparent',
  className,
  innerRef,
  ...restProps
}: AddSVGProps<LineProps, SVGLineElement>): JSX.Element {
  const isRectilinear = from.x === to.x || from.y === to.y;

  return (
    <line
      ref={innerRef}
      className={cx('visx-line', className)}
      x1={from.x}
      y1={from.y}
      x2={to.x}
      y2={to.y}
      fill={fill}
      shapeRendering={isRectilinear ? 'crispEdges' : 'auto'}
      {...restProps}
    />
  );
}
