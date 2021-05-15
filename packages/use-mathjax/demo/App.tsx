import { FC, StrictMode, useRef } from 'react';
import { MathJaxProvider } from '../src/provider/Provider/Provider';
import { useMathJax } from '../src/hooks/useMathJax/useMathJax';
import { MathJax } from '../src/components/MathJax/MathJax';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './global.css';
export const Maths: FC = () => {
  const ref = useRef<HTMLParagraphElement>();
  useMathJax({ elements: ref.current });

  return (
    <>
      <h1>useMathJax</h1>
      <h2>direct use with the hook useMathJax</h2>
      <div ref={ref}>
        <p
          className="math"
          dangerouslySetInnerHTML={{
            __html: `
            $$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$
          `,
          }}
        ></p>

        <SyntaxHighlighter language="javascript" style={docco}>
          {`
import { useMathJax } from '@cutting/use-mathjax';

export const Maths: FC = () => {
  const ref = useRef<HTMLParagraphElement>();
  useMathJax({ elements: [ref.current] });

  return (
    <>
      <h1>useMathJax</h1>
      <h2>direct use with the hook useMathJax</h2>
      <div ref={ref}>
        <p
          className="math"
          dangerouslySetInnerHTML={{
            __html: \`
            $$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$
          \`,
          }}
        ></p>
      </div>
    </>
  );
};
`}
        </SyntaxHighlighter>
        <h2>Or with the MathJax component</h2>
        <MathJax expr={`$$\\int x^2dx$$`} />
        <MathJax expr={`$$\\frac{5\\pi}4$$`} />
        <MathJax expr={`$$\\frac{3\\pi}2$$`} />
        <SyntaxHighlighter language="javascript" style={docco}>
          {`
import { MathJax } from '@cutting/use-mathjax';
//
//
//
        <MathJax expr={\`$$\\int x^2dx$$\`} />
        <MathJax expr={\`$$\\frac{5\\pi}4$$\`} />
        <MathJax expr={\`$$\\frac{3\\pi}2$$\`} />
          `}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export const App: FC = () => {
  return (
    <StrictMode>
      <MathJaxProvider>
        <Maths />
      </MathJaxProvider>
    </StrictMode>
  );
};
