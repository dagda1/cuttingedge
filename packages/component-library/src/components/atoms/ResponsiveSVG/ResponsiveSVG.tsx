import React from 'react';

export interface Point {
  x: number;
  y: number;
}

export interface ResponsiveSVGProps {
  width: number;
  height: number;
  origin?: Point;
  preserveAspectRatio?: string;
  innerRef?: React.RefObject<SVGSVGElement>;
  className?: string;
  hide?: boolean;
}

export const ResponsiveSVG: React.FunctionComponent<ResponsiveSVGProps> = ({
  height,
  width,
  children,
  origin = { x: 0, y: 0 },
  preserveAspectRatio = 'xMinYMin meet',
  innerRef,
  className,
}) => {
  const aspect = width / height;

  const adjustedHeight = Math.round(width / aspect);

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
