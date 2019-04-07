import { useRef, useEffect } from 'react';

export const usePrevious = <T>(value: T) => {
  const ref = useRef<T>(value);

  useEffect(() => {
    // eslint-disable-next-line
    (ref as any).current = value;
  }, [value]);

  return ref.current;
};
