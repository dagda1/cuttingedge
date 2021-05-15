import { FC, useState } from 'react';
import { browserAdaptor } from 'mathjax3/mathjax3/adaptors/browserAdaptor';
import { RegisterHTMLHandler } from 'mathjax3/mathjax3/handlers/html';
import { MathDocument } from 'mathjax3/mathjax3/core/MathDocument';
import { createStrictContext } from '../../createStrictContext';
import { MathJax } from 'mathjax3';
import { TeX } from 'mathjax3/mathjax3/input/tex.js';
import { SVG } from 'mathjax3/mathjax3/output/svg.js';
import { AllPackages } from 'mathjax3/mathjax3/input/tex/AllPackages';
import { useIsomorphicLayoutEffect } from 'react-use';

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

export const MathJaxProvider: FC = ({ children }) => {
  const [mathDocument, setMathDocument] = useState<MathDoc>();

  useIsomorphicLayoutEffect(() => {
    const html = MathJax.document(document, {
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
      version: MathJax.version,
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
};
