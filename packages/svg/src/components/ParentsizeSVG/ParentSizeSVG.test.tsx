import { describe, it, expect } from '@jest/globals';
import type { FC } from 'react';
import { render, screen } from '@testing-library/react';
import { useParentSize } from '@cutting/hooks';
import { useRef } from 'react';
import { ParentsizeSVG } from './ParentsizeSVG';

const TestEr: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  useParentSize(ref);

  return (
    <ParentsizeSVG elementRef={ref}>
      <rect x="20%" y="20%" width="200px" height="200px" rx="20" />
    </ParentsizeSVG>
  );
};

const wrap = () => render(<TestEr />);

describe('useParentSize', () => {
  it('should set the svg viewBox attribute', () => {
    wrap();

    const svg = document.querySelector('svg') as SVGElement;

    expect(svg.getAttribute('viewBox')).toBe('0 0 1 1');

    screen.getByTestId('cutting-svg-container');
  });
});
