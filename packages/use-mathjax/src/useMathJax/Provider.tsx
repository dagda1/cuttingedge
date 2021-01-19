import { FC, useState } from 'react';
import { createContext, useContext, useEffect } from 'react';
import { MathJax } from 'mathjax3';
import { TeX } from 'mathjax3/mathjax3/input/tex.js';
import { CHTML } from 'mathjax3/mathjax3/output/chtml.js';
import { browserAdaptor } from 'mathjax3/mathjax3/adaptors/browserAdaptor';
import { RegisterHTMLHandler } from 'mathjax3/mathjax3/handlers/html';
import { MathDocument } from 'mathjax3/mathjax3/core/MathDocument';

type MathDoc = {
  version: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  html: MathDocument<any, any, any>;
  Typeset: (...elements: HTMLElement[]) => void;
};

const MathJaxContext = createContext<MathDoc | undefined>(undefined);

export const DefaultFontUrl = 'https://cdn.rawgit.com/mathjax/mathjax-v3/3.0.0-beta.1/mathjax2/css';

export type MathJaxProviderProps = { fontURL?: string };

RegisterHTMLHandler(browserAdaptor());

export const MathJaxProvider: FC<MathJaxProviderProps> = ({ fontURL = DefaultFontUrl, children }): JSX.Element => {
  const [mathDocument, setMathDocument] = useState<MathDoc>();

  useEffect(() => {
    const html = MathJax.document(document, {
      InputJax: new TeX({
        inlineMath: [
          ['$', '$'],
          ['\\(', '\\)'],
        ],
        packages: ['base', 'ams', 'noundefined', 'newcommand', 'boldsymbol'],
      }),
      OutputJax: new CHTML({
        fontURL,
      }),
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
  }, [fontURL]);

  return <MathJaxContext.Provider value={mathDocument}>{children}</MathJaxContext.Provider>;
};

export const useMathJaxContext = (): MathDoc | undefined => useContext(MathJaxContext);
