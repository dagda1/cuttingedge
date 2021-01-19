import { MathJax } from 'mathjax3';
import { TeX } from 'mathjax3/mathjax3/input/tex.js';
import { CHTML } from 'mathjax3/mathjax3/output/chtml.js';
import { AllPackages } from 'mathjax3/mathjax3/input/tex/AllPackages';
import { useLayoutEffect, useState } from 'react';
import { MathDoc } from './Provider';

export const useMathJax = (): MathDoc | undefined => {
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
      OutputJax: new CHTML({
        fontURL: DefaultFontUrl,
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

    // console.log(document.querySelector('.math'));

    // if (!!document.querySelector('.math')) {
    //   mathJax.Typeset(document.querySelector('.math') as HTMLElement);
    // }
    setMathDocument(mathJax);
  }, []);

  return mathDocument;
};
