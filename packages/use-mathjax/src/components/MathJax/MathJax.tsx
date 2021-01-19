import { FC, LegacyRef, useRef } from 'react';
import { useMathJax } from '../../hooks/useMathJax/useMathJax';

export interface MathJaxProps {
  html: string;
}

export const MathJax: FC<MathJaxProps> = ({ html }) => {
  const ref = useRef<HTMLDivElement>();

  useMathJax({ elements: [ref.current as HTMLElement] });

  return <div ref={ref as LegacyRef<HTMLDivElement>} dangerouslySetInnerHTML={{ __html: html }} />;
};
