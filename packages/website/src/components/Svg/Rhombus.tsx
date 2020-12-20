import type { FC } from 'react';

export interface RhombusProps {
  className?: string;
}

export const Rhombus: FC<RhombusProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className={className} viewBox="0 0 40 40">
    <path d="M20 0 L40 20 L20 40 L0 20" />
  </svg>
);
