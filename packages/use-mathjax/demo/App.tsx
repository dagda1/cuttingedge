import { FC, StrictMode, useEffect, useRef } from 'react';
import { useMathJaxContext, MathJaxWrapper } from '../src/useMathJax/Provider';
import './global.css';

export const Maths: FC = () => {
  const ref = useRef<HTMLParagraphElement>();
  const context = useMathJaxContext();

  useEffect(() => {
    context.Typeset(ref.current);
  }, [context]);
  return (
    <>
      <h1>useMathJax</h1>
      <div>
        <h1>MathJax v3 beta: TeX input, HTML output test</h1>

        <p className="math" ref={ref}>
          When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
          {'$$x = {-b pm sqrt{b^2-4ac} over 2a}.$$'}
        </p>
      </div>
    </>
  );
};

export const App: FC = () => {
  return (
    <StrictMode>
      <MathJaxWrapper>
        <Maths />
      </MathJaxWrapper>
    </StrictMode>
  );
};
