import type { ReactNode, Ref } from 'react';
import type { PreserveAspectRatio, SVGAttributes } from '../../types/types';

export interface Point {
  x: number;
  y: number;
}

export type ResponsiveSVGProps = SVGAttributes<{
  width: number;
  height: number;
  origin?: Point;
  preserveAspectRatio?: PreserveAspectRatio;
  innerRef?: Ref<SVGSVGElement>;
  className?: string;
  hide?: boolean;
  children: ReactNode;
}>;

export function ResponsiveSVG({
  height,
  width,
  children,
  origin = { x: 0, y: 0 },
  preserveAspectRatio = 'xMaxYMid meet',
  innerRef,
  className,
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
        height: '1px',
      }}
    >
      <svg
        style={{ overflow: 'visible' }}
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
