import { useLayoutEffect } from 'react';
import { useMathJaxContext } from '../../provider/Provider/Provider';

export interface UseMathJax {
  elements?: HTMLElement[];
}

export const useMathJax = ({ elements }: UseMathJax): void => {
  const mathJaxContext = useMathJaxContext();

  useLayoutEffect(() => {
    if (!mathJaxContext) {
      return;
    }

    if (elements?.length && elements.every((x) => !!x)) {
      mathJaxContext.Typeset(...elements);
    }
  }, [elements, mathJaxContext]);
};
