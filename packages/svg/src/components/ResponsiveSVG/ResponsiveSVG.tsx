import type { ReactNode, Ref } from 'react';

import type { PreserveAspectRatio, SVGAttributes } from '../../types/types';

export interface Point {
  x: number;
  y: number;
}

export type ResponsiveSVGProps = SVGAttributes<{
  width?: number;
  height?: number;
  origin?: Point;
  preserveAspectRatio?: PreserveAspectRatio;
  innerRef?: Ref<SVGSVGElement>;
  className?: string;
  hide?: boolean;
  children: ReactNode;
  overflow?: 'hidden' | 'visible';
}>;

export function ResponsiveSVG({
  height = 0,
  width = 0,
  children,
  origin = { x: 0, y: 0 },
  preserveAspectRatio = 'xMaxYMid meet',
  innerRef,
  className,
  overflow = 'visible',
  ...props
}: ResponsiveSVGProps): JSX.Element {
  const aspect = height === 0 ? 1 : width / height;

  const adjustedHeight = Math.ceil(width / aspect);

  return (
    <div
      data-testid="cutting-svg-container"
      style={{
        position: 'relative',
        overflow: 'visible',
        height: '0px',
      }}
    >
      <svg
        style={{ overflow, width: '100%', height: 'auto' }}
        className={className}
        preserveAspectRatio={preserveAspectRatio}
        viewBox={`${origin.x} ${origin.y} ${width} ${adjustedHeight}`}
        ref={innerRef}
        {...props}
      >
        {children}
      </svg>
    </div>
  );
}
