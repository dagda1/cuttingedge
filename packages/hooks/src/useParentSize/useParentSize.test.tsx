import { expect, it, describe } from '@jest/globals';
import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { resize } from '@cutting/testing/dist/ResizeObserver';
import { useParentSize } from './useParentSize';

describe('useParentSize', () => {
  it('should use initial default dimensions of { width: 1, height: 1}', async () => {
    const ref: { current: null | HTMLDivElement } = { current: null };
    const { result } = renderHook(() => useParentSize(ref));

    await act(async () => {
      const div = document.createElement('div');
      ref.current = div;
    });

    expect(result.current).toEqual({
      width: 1,
      height: 1,
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
});
