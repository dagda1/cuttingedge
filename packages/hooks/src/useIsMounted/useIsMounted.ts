import type { MutableRefObject } from 'react';
import { useEffect, useRef } from 'react';

export const useIsMounted = (): MutableRefObject<boolean> => {
  const isMountedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return isMountedRef;
};
