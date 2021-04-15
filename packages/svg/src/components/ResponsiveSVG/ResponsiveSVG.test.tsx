import { describe, it, expect } from '@jest/globals';
import type { FC } from 'react';
import { render, screen } from '@testing-library/react';
import { resize } from '@cutting/testing/dist/ResizeObserver';
import { useParentSize } from '@cutting/hooks';
import { useRef } from 'react';
import { ResponsiveSVG } from './ResponsiveSVG';

const TestEr: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { width, height } = useParentSize(ref);

  return (
    <div ref={ref}>
      <ResponsiveSVG height={height} width={width}>
        <rect x="20%" y="20%" width="200px" height="200px" rx="20" />
      </ResponsiveSVG>
    </div>
  );
};

const wrap = () => render(<TestEr />);

describe('useParentSize', () => {
  it('should set the svg viewBox attribute', () => {
    resize(200, 200);
    wrap();

    const svg = document.querySelector('svg') as SVGElement;

    expect(svg.getAttribute('viewBox')).toBe('0 0 200 200');

    screen.getByTestId('cutting-svg-container');
  });
});
