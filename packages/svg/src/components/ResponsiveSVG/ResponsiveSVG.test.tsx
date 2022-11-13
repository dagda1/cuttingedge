import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { useParentSize } from '@cutting/use-get-parent-size';
import { useRef } from 'react';
import type { ResponsiveSVGProps } from './ResponsiveSVG.js';
import { ResponsiveSVG } from './ResponsiveSVG.js';

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

type TestResponsiveSVGProps = Omit<ResponsiveSVGProps, 'width' | 'height' | 'children'>;

function TestEr(props: TestResponsiveSVGProps = {} as ResponsiveSVGProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const { width, height } = useParentSize(ref);

  return (
    <div ref={ref}>
      <ResponsiveSVG height={height} width={width} {...props}>
        <rect x="20%" y="20%" width="200px" height="200px" rx="20" />
      </ResponsiveSVG>
    </div>
  );
}

const wrap = (props: TestResponsiveSVGProps = {} as ResponsiveSVGProps): ReturnType<typeof render> =>
  render(<TestEr {...props} />);

class FakeMouseEvent extends MouseEvent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(type: string, values: any) {
    const { pageX, pageY, offsetX, offsetY, x, y, ...mouseValues } = values;
    super(type, mouseValues);

    Object.assign(this, {
      offsetX: offsetX || 0,
      offsetY: offsetY || 0,
      pageX: pageX || 0,
      pageY: pageY || 0,
      x: x || 0,
      y: y || 0,
    });
  }
}

describe('ResponsiveSVG', () => {
  it('should pass intrinsic props straight through', () => {
    const mouseMoveHandler = vi.fn();

    const { container } = wrap({ onMouseMove: mouseMoveHandler });

    fireEvent.mouseMove(
      container.querySelector('svg'),
      new FakeMouseEvent('mousemove', {
        bubbles: true,
        pageX: 350,
        pageY: 125,
      }),
    );

    expect(mouseMoveHandler).toHaveBeenCalled();
  });
});

// describe.skip('useParentSize', () => {
//   it('should set the svg viewBox attribute', () => {
//     resize(200, 200);
//     wrap();

//     const svg = document.querySelector('svg') as SVGElement;

//     expect(svg.getAttribute('viewBox')).toBe('0 0 200 200');

//     screen.getByTestId('cutting-svg-container');
//   });
// });
