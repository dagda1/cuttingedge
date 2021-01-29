import { FC, useRef } from 'react';
import { ParentsizeSVG } from '@cutting/svg';

export const Explorer: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <div ref={ref}>
        <ParentsizeSVG elementRef={ref}>
          <circle x={12} y={20} r={20} />
        </ParentsizeSVG>
      </div>
    </>
  );
};
