export interface Dimensions {
  width: number;
  height: number;
}

export interface UseParentSizeOptions {
  debounceDelay: number;
  initialValues: Dimensions;
  transformFunc?: ({ width, height }: Dimensions) => Dimensions;
}

export type UseParentSizeResult = Dimensions;
