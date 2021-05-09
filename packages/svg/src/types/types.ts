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

export type PreserveAspectRatio = `${PreserveAspectRatioAlignment} ${MeetOrSlice}`;

export type AddSVGProps<Props, Element extends SVGElement> = Props & Omit<React.SVGProps<Element>, keyof Props>;
