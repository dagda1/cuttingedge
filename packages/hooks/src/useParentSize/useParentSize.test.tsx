import { FC, useRef } from 'react';
import { UseParentSizeOptions } from './types';
import { useParentSize } from './useParentSize';
import { render, screen } from '@testing-library/react';

const scheduler = typeof setImmediate === 'function' ? setImmediate : setTimeout;

// eslint-disable-next-line jest/no-export
export function flushPromises(): Promise<unknown> {
  return new Promise((resolve) => {
    scheduler(resolve, 0);
  });
}

const TestComponent: FC<{ options?: UseParentSizeOptions }> = ({ options }) => {
  const renderCountRef = useRef(0);
  const { ref, width, height } = useParentSize(options);

  console.log({ ref, width, height });

  renderCountRef.current++;
  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        width: '200px',
        height: '200px',
      }}
    >
      <span data-testid="dimensions">
        {width}x{height}
      </span>
      <div>
        Render Count: <span data-testid="render-count">{renderCountRef.current}</span>
      </div>
    </div>
  );
};

const wrap = (debounceDelay = 0) => render(<TestComponent options={{ debounceDelay }} />);

describe('useParentSize hook', () => {
  it('should return dimensions', async () => {
    const { rerender } = wrap();

    await flushPromises();

    rerender(<TestComponent options={{ debounceDelay: 0 }} />);

    await flushPromises();

    expect(screen.getByTestId('bernard')).toBeDefined();
  });
});
