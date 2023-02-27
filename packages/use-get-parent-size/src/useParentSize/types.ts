export interface Dimensions {
  width: number;
  height: number;
}

export interface UseParentSizeOptions {
  debounceDelay: number;
  initialValues: Dimensions;
  transformFunc?: ({ width, height }: Dimensions) => Dimensions;
  maxDifference?: number;
}

export type UseParentSizeResult = Dimensions;
