import type { SVGAttributes as SvgAttributes } from 'react';

export type PreserveAspectRatioAlignment =
  | 'xMinYMin'
  | 'xMidYMin'
  | 'xMaxYMin'
  | 'xMinYMid'
  | 'xMidYMid'
  | 'xMaxYMid'
  | 'xMinYMax'
  | 'xMidYMax'
  | 'xMaxYMax';

export type MeetOrSlice = 'meet' | 'slice';

export type PreserveAspectRatio = `${PreserveAspectRatioAlignment} ${MeetOrSlice}` | 'none';

export type AddSVGProps<Props, Element extends SVGElement> = Props & Omit<React.SVGProps<Element>, keyof Props>;

export interface Point {
  x: number;
  y: number;
}

export type SVGAttributes<T> = T &
  Omit<SvgAttributes<SVGSVGElement>, 'origin' | 'viewBox' | 'preserveAspectRatio' | 'children '>;
