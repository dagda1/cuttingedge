/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderHook } from '@testing-library/react-hooks';
import { useDocumentTitle } from './useDocumentTitle';

describe('useDocumentTitle', () => {
  it('sets a title', () => {
    document.title = 'original title';
    renderHook(() => {
      useDocumentTitle('modified title');
    });

    expect(document.title).toBe('modified title');
  });
});
