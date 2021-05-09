import type { FC } from 'react';
import cx from 'classnames';
import { AddSVGProps } from '../../types/types';

interface Point {
  x?: number;
  y?: number;
}

export type LineProps = {
  className?: string;
  innerRef?: React.Ref<SVGLineElement>;
  fill?: string;
  /** Starting x,y point of the line. */
  from?: Point;
  /** Ending x,y point of the line. */
  to?: Point;
};

export const Line: FC<LineProps> = ({
  from = { x: 0, y: 0 },
  to = { x: 1, y: 1 },
  fill = 'transparent',
  className,
  innerRef,
  ...restProps
}: AddSVGProps<LineProps, SVGLineElement>): JSX.Element => {
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
};
