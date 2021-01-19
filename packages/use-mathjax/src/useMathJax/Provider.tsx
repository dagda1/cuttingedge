import { FC, ReactElement, useLayoutEffect, useState } from 'react';
import { browserAdaptor } from 'mathjax3/mathjax3/adaptors/browserAdaptor';
import { RegisterHTMLHandler } from 'mathjax3/mathjax3/handlers/html';
import { MathDocument } from 'mathjax3/mathjax3/core/MathDocument';
import { createStrictContext } from '../createStrictContext';
import { MathJax } from 'mathjax3';
import { TeX } from 'mathjax3/mathjax3/input/tex.js';
import { SVG } from 'mathjax3/mathjax3/output/svg.js';
import { AllPackages } from 'mathjax3/mathjax3/input/tex/AllPackages';

export interface MathDoc {
  version: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  html: MathDocument<any, any, any>;
  Typeset: (...elements: HTMLElement[]) => void;
}

export interface MathJaxProviderProps {
  mathDocument: MathDoc;
}

export interface MathJaxWrapperProps {
  loader?: ReactElement;
}

RegisterHTMLHandler(browserAdaptor());

export const [MathJaxProvider, useMathJaxContext] = createStrictContext<MathDoc>();

export const MathJaxWrapper: FC<MathJaxWrapperProps> = ({ loader = <div>...loading</div>, children }) => {
  const [mathDocument, setMathDocument] = useState<MathDoc>();
  useLayoutEffect(() => {
    const html = MathJax.document(document, {
      InputJax: new TeX({
        inlineMath: [
          ['$', '$'],
          ['\\(', '\\)'],
        ],
        packages: AllPackages,
      }),
      OutputJax: new SVG({}),
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

  if (!mathDocument) {
    return loader;
  }

  return <MathJaxProvider value={mathDocument}>{children}</MathJaxProvider>;
};
