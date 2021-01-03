import { useRef, useEffect, MutableRefObject } from 'react';

export const useIsMounted = (): MutableRefObject<boolean> => {
  const isMountedRef = useRef(true);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return isMountedRef;
};
