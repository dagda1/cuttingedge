import { FC, LegacyRef, useRef } from 'react';
import { useMathJax } from '../../hooks/useMathJax/useMathJax';

export interface MathJaxProps {
  expr: string;
}

export const MathJax: FC<MathJaxProps> = ({ expr }) => {
  const ref = useRef<HTMLDivElement>();

  useMathJax({ elements: [ref.current as HTMLElement] });

  return <div ref={ref as LegacyRef<HTMLDivElement>} dangerouslySetInnerHTML={{ __html: expr }} />;
};

export const SVGMathJax: FC<MathJaxProps & { width?: number; height?: number }> = ({
  expr,
  width = 30,
  height = 30,
}) => {
  return (
    <foreignObject width={width} height={height}>
      <MathJax expr={expr} />
    </foreignObject>
  );
};
