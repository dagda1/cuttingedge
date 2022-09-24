import { StrictMode, useRef } from 'react';
import { MathJaxProvider } from '../../src/provider/Provider/Provider.js';
import { useMathJax } from '../../src/hooks/useMathJax/useMathJax.js';
import { MathJax } from '../../src/components/MathJax/MathJax.js';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './global.css';
export function Maths(): JSX.Element {
  const ref = useRef<HTMLParagraphElement>(null);
  useMathJax({ elements: ref.current });

  return (
    <>
      <h1>useMathJax</h1>
      <h2>direct use with the useMathJax hook</h2>

        <SyntaxHighlighter language="javascript" style={docco}>
          {`
import { useMathJax } from '@cutting/use-mathjax';

export const Maths(): JSX.Element {
  const ref = useRef<HTMLParagraphElement>();
  useMathJax({ elements: [ref.current] });

  return (
    <>
      <h1>useMathJax</h1>
      <h2>direct use with the useMathJax hook</h2>
      <div ref={ref}>
        <p className="math">{\`$$x = {-b \\\\pm \\\\sqrt{b^2-4ac} \\\\over 2a}$$\`}</p>
      </div>
    </>
  );
};
`}
        </SyntaxHighlighter>
        <strong>renders:</strong>
        <div ref={ref}>
          <p className="math">{`$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$`}</p>
         </div>

        <h2>Or with the MathJax component</h2>
        <SyntaxHighlighter language="javascript" style={docco}>
          {`
import { MathJax } from '@cutting/use-mathjax';

<MathJax> {\`$$\\\\int x^2dx$$\`}</MathJax>
<MathJax> {\`$$\\\\frac{5\\\\pi}4$$\`}</MathJax>
<MathJax> {\`$$\\\\frac{3\\\\pi}2$$\`}</MathJax>  
`}
        </SyntaxHighlighter>
        <strong>renders:</strong>
        <MathJax> {`$$\\int x^2dx$$`}</MathJax>
        <MathJax> {`$$\\frac{5\\pi}4$$`}</MathJax>
        <MathJax> {`$$\\frac{3\\pi}2$$`}</MathJax>
    </>
  );
}

export function App(): JSX.Element {
  return (
    <StrictMode>
      <MathJaxProvider>
        <Maths />
      </MathJaxProvider>
    </StrictMode>
  );
}
