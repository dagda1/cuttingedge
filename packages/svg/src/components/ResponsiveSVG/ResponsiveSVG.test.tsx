import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useParentSize } from '@cutting/use-get-parent-size';
import { useRef } from 'react';
import { ResponsiveSVG } from './ResponsiveSVG.js';
import { vi } from 'vitest';

import ResizeObserver from 'resize-observer-polyfill';

vi.mock('resize-observer-polyfill');

const resize = (width: number, height: number): void => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  ResizeObserver.mockImplementation((cb) => {
    cb([{ contentRect: { width, height } }]);
    return { observe: vi.fn(), disconnect: vi.fn(), unobserve: vi.fn() };
  });
};

function TestEr(): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const { width, height } = useParentSize(ref);

  return (
    <div ref={ref}>
      <ResponsiveSVG height={height} width={width}>
        <rect x="20%" y="20%" width="200px" height="200px" rx="20" />
      </ResponsiveSVG>
    </div>
  );
}

const wrap = () => render(<TestEr />);

describe.skip('useParentSize', () => {
  it('should set the svg viewBox attribute', () => {
    resize(200, 200);
    wrap();

    const svg = document.querySelector('svg') as SVGElement;

    expect(svg.getAttribute('viewBox')).toBe('0 0 200 200');

    screen.getByTestId('cutting-svg-container');
  });
});
