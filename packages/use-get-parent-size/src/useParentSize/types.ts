export type ResizeObserverContentRect = ResizeObserverEntry['contentRect'];

export type Writeable<T> = { -readonly [P in keyof T]: T[P] };

export interface UseParentSizeOptions {
  debounceDelay: number;
  initialValues: Partial<ResizeObserverContentRect>;
  transformFunc?: (entry: Partial<ResizeObserverContentRect>) => Partial<ResizeObserverContentRect>;
  maxDifference?: number;
  callback?(entry: ResizeObserverContentRect): void;
}

export type UseParentSizeResult = Partial<ResizeObserverContentRect>;
