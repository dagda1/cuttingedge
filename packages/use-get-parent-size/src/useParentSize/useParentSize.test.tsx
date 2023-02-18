import { expect, it, describe } from 'vitest';
import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { useParentSize } from './useParentSize';
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

describe('useParentSize', () => {
  it('should use initial default dimensions of { width: 1, height: 1}', async () => {
    const ref: { current: null | HTMLDivElement } = { current: null };
    const { result } = renderHook(() => useParentSize(ref));

    await act(async () => {
      const div = document.createElement('div');
      ref.current = div;
    });

    expect(result.current).toEqual({
      width: 0,
      height: 0,
    });
  });

  it('should use user set initial dimensions', async () => {
    const ref: { current: null | HTMLDivElement } = { current: null };
    const { result } = renderHook(() => useParentSize(ref, { initialValues: { width: 200, height: 200 } }));

    await act(async () => {
      const div = document.createElement('div');
      ref.current = div;
    });

    expect(result.current).toEqual({
      width: 200,
      height: 200,
    });
  });

  it('should return the dimensions of an element', async () => {
    const ref: { current: null | HTMLDivElement } = { current: null };

    resize(200, 200);

    await act(async () => {
      ref.current = document.createElement('div');
    });

    const { result } = renderHook(() => useParentSize(ref));

    expect(result.current).toEqual({
      width: 200,
      height: 200,
    });
  });

  it('should apply transformation', async () => {
    const ref: { current: null | HTMLDivElement } = { current: null };

    resize(200, 200);

    await act(async () => {
      ref.current = document.createElement('div');
    });

    const { result } = renderHook(() =>
      useParentSize(ref, { transformFunc: ({ width, height }) => ({ width: width / 2, height: height / 2 }) }),
    );

    expect(result.current).toEqual({
      width: 100,
      height: 100,
    });
  });
});
