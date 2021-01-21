import type { FC, RefObject } from 'react';
import { PreserveAspectRatio } from '../../types/types';

export interface Point {
  x: number;
  y: number;
}

export interface ResponsiveSVGProps {
  width: number;
  height: number;
  origin?: Point;
  preserveAspectRatio?: PreserveAspectRatio;
  innerRef?: RefObject<SVGSVGElement>;
  className?: string;
  hide?: boolean;
}

export const ResponsiveSVG: FC<ResponsiveSVGProps> = ({
  height,
  width,
  children,
  origin = { x: 0, y: 0 },
  preserveAspectRatio = 'xMaxYMid meet',
  innerRef,
  className,
}) => {
  const aspect = width / height;

  const adjustedHeight = Math.ceil(width / aspect);

  return (
    <div
      data-selector="cutting-svg-container"
      style={{
        position: 'relative',
        overflow: 'visible',
        height: '1px',
      }}
    >
      <svg
        style={{ overflow: 'visible' }}
        className={className}
        preserveAspectRatio={preserveAspectRatio}
        viewBox={`${origin.x} ${origin.y} ${width} ${adjustedHeight}`}
        ref={innerRef}
      >
        {children}
      </svg>
    </div>
  );
};
