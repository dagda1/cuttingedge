import { useIsomorphicLayoutEffect } from '@cutting/hooks';
import { useMemo } from 'react';

import { useMathJaxContext } from '../../provider/Provider/Provider';

export interface UseMathJax {
  elements: HTMLElement | HTMLElement[] | SVGGElement | SVGElement[] | null;
}

export const useMathJax = ({ elements }: UseMathJax): void => {
  const boxed = useMemo(() => (Array.isArray(elements) ? elements : [elements]), [elements]) as HTMLElement[];
  const mathJaxContext = useMathJaxContext();

  useIsomorphicLayoutEffect(() => {
    if (!mathJaxContext) {
      return;
    }

    if (boxed?.length && boxed.every((x) => !!x)) {
      mathJaxContext.Typeset(...boxed);
    }
  }, [boxed, mathJaxContext]);
};
