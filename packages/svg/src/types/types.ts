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
