import type { ReactNode } from 'react';
import { useState } from 'react';
import { browserAdaptor } from 'mathjax-full/js/adaptors/browserAdaptor';
import { RegisterHTMLHandler } from 'mathjax-full/js/handlers/html';
import { createStrictContext } from '../../createStrictContext';
import { mathjax } from 'mathjax-full/js/mathjax';
import { TeX } from 'mathjax-full/js/input/tex';
import { SVG } from 'mathjax-full/js/output/svg';
import { AllPackages } from 'mathjax-full/js/input/tex/AllPackages';
import { useIsomorphicLayoutEffect } from '@cutting/hooks';
import type { MathDocument } from 'mathjax-full/js/core/MathDocument';

interface MathDoc {
  version: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  html: MathDocument<any, any, any>;
  Typeset: (...elements: HTMLElement[]) => void;
}

export interface ProviderProps {
  mathDocument: MathDoc;
}

if (typeof window !== 'undefined') {
  RegisterHTMLHandler(browserAdaptor());
}

export const [Provider, useMathJaxContext] = createStrictContext<MathDoc | undefined>({ strict: false });

export function MathJaxProvider({ children }: { children: ReactNode }): JSX.Element {
  const [mathDocument, setMathDocument] = useState<MathDoc>();

  useIsomorphicLayoutEffect(() => {
    const html = mathjax.document(document, {
      InputJax: new TeX({
        inlineMath: [
          ['$', '$'],
          ['\\(', '\\)'],
        ],
        processEscapes: true,
        packages: AllPackages,
      }),
      OutputJax: new SVG({ displayAlign: 'left' }),
    });

    const mathJax = {
      version: mathjax.version,
      html: html,

      Typeset(...elements: HTMLElement[]) {
        html
          .findMath(elements.length ? { elements } : {})
          .compile()
          .getMetrics()
          .typeset()
          .updateDocument()
          .clear();
      },
    };

    setMathDocument(mathJax);
  }, []);

  return <Provider value={mathDocument}>{children}</Provider>;
}
