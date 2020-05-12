export interface Dimensions {
  width: number;
  height: number;
}

export interface UseParentSizeOptions {
  initialDimensions: Dimensions;
  offset?: Dimensions;
}

export enum SizeActionTypes {
  SetSize = 'SET_SIZE',
}

export interface SizeAction {
  type: SizeActionTypes.SetSize;
  payload: Dimensions;
}
