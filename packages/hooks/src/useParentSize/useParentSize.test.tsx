import { FC, useRef } from 'react';
import { UseParentSizeOptions } from './types';
import { useParentSize } from './useParentSize';
import { render, screen } from '@testing-library/react';

const TestComponent: FC<{ options?: UseParentSizeOptions }> = ({ options }) => {
  const renderCountRef = useRef(0);
  const { ref, width, height } = useParentSize(options);

  renderCountRef.current++;
  return (
    <div
      // TODO: fix this
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        background: 'grey',
        color: 'white',
        fontWeight: 'bold',
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const wrap = (options: Partial<UseParentSizeOptions> = {}) => render(<TestComponent {...(options as any)} />);

describe('useParentSize hook', () => {
  it('should return dimensions', () => {
    wrap();

    expect(screen.getByTestId('bernard')).toBeDefined();
  });
});
