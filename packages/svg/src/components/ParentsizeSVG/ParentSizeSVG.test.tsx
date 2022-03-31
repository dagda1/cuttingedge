import { describe, it, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { useParentSize } from '@cutting/use-get-parent-size';
import { useRef } from 'react';
import type { ParentsizeSVGProps } from './ParentsizeSVG';
import { ParentsizeSVG } from './ParentsizeSVG';

function TestEr(props: ParentsizeSVGProps) {
  const ref = useRef<HTMLDivElement>(null);
  useParentSize(ref);

  return (
    <ParentsizeSVG {...props} elementRef={ref}>
      <rect x="20%" y="20%" width="200px" height="200px" rx="20" />
    </ParentsizeSVG>
  );
}

const wrap = (props: ParentsizeSVGProps = { align: 'none' } as ParentsizeSVGProps) => render(<TestEr {...props} />);

describe('useParentSize', () => {
  it('should set the svg viewBox attribute', () => {
    wrap();

    const svg = document.querySelector('svg') as SVGElement;

    expect(svg.getAttribute('viewBox')).toBe('0 0 1 1');

    screen.getByTestId('cutting-svg-container');
  });
});
