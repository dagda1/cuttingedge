import { expect, it, describe } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';
import { useParentSize } from './useParentSize.js';
import { vi } from 'vitest';

import ResizeObserver from 'resize-observer-polyfill';
import type { ResizeObserverContentRect } from './types.js';

vi.mock('resize-observer-polyfill');

const resize = (width: number, height: number): void => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  ResizeObserver.mockImplementation((cb) => {
    cb([{ contentRect: { width, height } }]);
    return { observe: vi.fn(), disconnect: vi.fn(), unobserve: vi.fn() };
  });
};

const initialContentRect: Partial<ResizeObserverContentRect> = {
  bottom: undefined,
  height: undefined,
  left: undefined,
  width: undefined,
  right: undefined,
  top: undefined,
  x: undefined,
  y: undefined,
};

describe('useParentSize', () => {
  it('should use initial default contentRect', async () => {
    const ref: { current: null | HTMLDivElement } = { current: document.createElement('div') };
    const { result } = renderHook(() => useParentSize(ref));

    expect(result.current).toEqual(initialContentRect);
  });

  it('should use user set initial dimensions', async () => {
    const ref: { current: null | HTMLDivElement } = { current: document.createElement('div') };
    const { result } = renderHook(() => useParentSize(ref, { initialValues: { width: 200, height: 200 } }));

    expect(result.current).toEqual({
      width: 200,
      height: 200,
    });
  });

  it('should return the dimensions of an element', async () => {
    const ref: { current: null | HTMLDivElement } = { current: document.createElement('div') };

    resize(200, 200);

    const { result } = renderHook(() => useParentSize(ref));

    expect(result.current).toEqual({
      width: 200,
      height: 200,
    });
  });

  it('should apply transformation', async () => {
    const ref: { current: null | HTMLDivElement } = { current: document.createElement('div') };

    resize(200, 200);

    const { result } = renderHook(() =>
      useParentSize(ref, {
        transformFunc: ({ width, height }) => ({
          width: width && width > 0 ? width / 2 : 0,
          height: height && height > 0 ? height / 2 : 0,
        }),
      }),
    );

    expect(result.current).toEqual({
      width: 100,
      height: 100,
    });
  });

  it('should call the callback option', async () => {
    const ref: { current: null | HTMLDivElement } = { current: document.createElement('div') };

    const callback = vi.fn();
    resize(200, 200);

    renderHook(() =>
      useParentSize(ref, {
        callback,
        maxDifference: -1,
      }),
    );

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
