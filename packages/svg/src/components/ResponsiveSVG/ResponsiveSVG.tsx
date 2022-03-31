import type { ReactNode, Ref } from 'react';
import type { PreserveAspectRatio } from '../../types/types';

export interface Point {
  x: number;
  y: number;
}

export interface ResponsiveSVGProps {
  width: number;
  height: number;
  origin?: Point;
  preserveAspectRatio?: PreserveAspectRatio;
  innerRef?: Ref<SVGSVGElement>;
  className?: string;
  hide?: boolean;
  children: ReactNode;
}

export function ResponsiveSVG({
  height,
  width,
  children,
  origin = { x: 0, y: 0 },
  preserveAspectRatio = 'xMaxYMid meet',
  innerRef,
  className,
}: ResponsiveSVGProps): JSX.Element {
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
}
