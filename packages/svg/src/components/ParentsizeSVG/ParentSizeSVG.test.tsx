import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useParentSize } from '@cutting/use-get-parent-size';
import { useRef } from 'react';
import type { ParentsizeSVGProps } from './ParentsizeSVG';
import { ParentsizeSVG } from './ParentsizeSVG';

function TestEr(props: Partial<ParentsizeSVGProps>) {
  const ref = useRef<HTMLDivElement>(null);
  useParentSize(ref);

  return (
    <div ref={ref} style={{ width: '100vw', height: '100vh' }}>
      <ParentsizeSVG {...props} parentRef={ref}>
        <rect x="20%" y="20%" width="200px" height="200px" rx="20" />
      </ParentsizeSVG>
    </div>
  );
}

const wrap = (props: Partial<ParentsizeSVGProps> = {}) => render(<TestEr {...props} />);

describe('useParentSize', () => {
  it('should set the svg viewBox attribute', () => {
    wrap();

    const svg = document.querySelector('svg') as SVGElement;

    expect(svg.getAttribute('viewBox')).toBe('0 0 0 0');

    screen.getByTestId('cutting-svg-container');
  });
});
