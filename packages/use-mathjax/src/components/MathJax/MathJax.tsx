import { FC, LegacyRef, useRef } from 'react';
import { useMathJax } from '../../hooks/useMathJax/useMathJax';
import { MathJaxProps } from './types';

export const MathJax: FC<MathJaxProps> = ({ expr }) => {
  const ref = useRef<HTMLDivElement>();

  useMathJax({ elements: [ref.current as HTMLElement] });

  return <div ref={ref as LegacyRef<HTMLDivElement>} dangerouslySetInnerHTML={{ __html: expr }} />;
};
