import { RefObject, useEffect, useRef } from 'react';
import Typed, { TypedOptions } from 'typed.js';

const defaultOptions = {
  startDelay: 50,
  typeSpeed: 30,
  backSpeed: 1,
  backDelay: 1,
  showCursor: false,
  fadeOut: true,
} as const;

export function useTyped<E>(strings: string[], ref: RefObject<E>, options: TypedOptions = defaultOptions): void {
  const typed = useRef<Typed>();

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typed.current = new Typed(ref.current as any, { ...options, strings });

    return () => {
      typed.current?.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
