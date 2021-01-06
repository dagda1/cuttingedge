import type { FC, RefObject } from 'react';

export interface Point {
  x: number;
  y: number;
}

export interface ResponsiveSVGProps {
  width: number;
  height: number;
  origin?: Point;
  preserveAspectRatio?: string;
  innerRef?: RefObject<SVGSVGElement>;
  className?: string;
  hide?: boolean;
}

export const ResponsiveSVG: FC<ResponsiveSVGProps> = ({
  height,
  width,
  children,
  origin = { x: 0, y: 0 },
  preserveAspectRatio = 'xMinYMin slice',
  innerRef,
  className,
}) => {
  const aspect = width / height;

  const adjustedHeight = Math.ceil(width / aspect);

  return (
    <div
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
