import { FC, StrictMode, useRef } from 'react';
import { MathJaxProvider } from '../src/provider/Provider/Provider';
import { useMathJax } from '../src/hooks/useMathJax/useMathJax';
import './global.css';
import { MathJax } from '../src/components/MathJax/MathJax';

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
            __html: `
            $$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$
          `,
          }}
        ></p>
        <h2>Or with the MathJax component</h2>
        <MathJax html={`$$\\int x^2dx$$`} />
        <MathJax html={`$$\\frac{5\\pi}4$$`} />
        <MathJax html={`$$\\frac{3\\pi}2$$`} />
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
