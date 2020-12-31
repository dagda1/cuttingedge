import type { FC, RefObject } from 'react';
import type { UseParentSizeOptions } from '@cutting/hooks';
import { useParentSize } from '@cutting/hooks';
import { ResponsiveSVG } from 'src/components/ResponsiveSVG/ResponsiveSVG';

export type ParentsizeSVGProps<E = HTMLHtmlElement> = UseParentSizeOptions & {
  ref: RefObject<E>;
};

export const ParentsizeSVG: FC<ParentsizeSVGProps> = ({ ref, children, ...rest }) => {
  const { width, height } = useParentSize(ref, rest);

  return (
    <ResponsiveSVG width={width} height={height}>
      {children}
    </ResponsiveSVG>
  );
};
