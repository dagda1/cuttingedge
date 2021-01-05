import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import ResizeObserver from 'resize-observer-polyfill';
import { useParentSize } from './useParentSize';

jest.mock('resize-observer-polyfill');

const resize = (width: number, height: number) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  ResizeObserver.mockImplementation((cb) => {
    cb([{ contentRect: { width, height } }]);
    return { observe: jest.fn(), disconnect: jest.fn(), unobserve: jest.fn() };
  });
};

const scheduler = typeof setImmediate === 'function' ? setImmediate : setTimeout;

// eslint-disable-next-line jest/no-export
export function flushPromises(): Promise<unknown> {
  return new Promise((resolve) => {
    scheduler(resolve, 0);
  });
}

describe('useParentSize', () => {
  it('should initially return dimensions of undefined', async () => {
    const ref = { current: null };
    const { result } = renderHook(() => useParentSize(ref));

    await act(async () => {
      const div = document.createElement('div');
      ref.current = div;
    });

    expect(result.current).toEqual({
      width: undefined,
      height: undefined,
    });
  });

  it('should return the dimensions of an element', async () => {
    const ref = { current: null };

    resize(200, 200);

    await act(async () => {
      ref.current = document.createElement('div');

      await flushPromises();
    });

    const { result } = renderHook(() => useParentSize(ref));

    expect(result.current).toEqual({
      width: 200,
      height: 200,
    });
  });
});
