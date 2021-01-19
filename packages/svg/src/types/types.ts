export type PreserveAspectRatio =
  | 'xMidYMid meet'
  | 'xMinYMid meet'
  | 'xMaxYMid meet'
  | 'xMidYMin slice'
  | 'xMidYMid slice'
  | 'xMidYMax slice'
  | 'xMidYMin meet'
  | 'xMidYMax meet'
  | 'xMinYMid slice'
  | 'xMaxYMid slice';
