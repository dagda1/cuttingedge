import { renderHook } from '@testing-library/react-hooks';
import { useDocumentTitle } from './useDocumentTitle';

describe('useDocumentTitle', () => {
  it('should set the document title', () => {
    document.title = 'original title';

    renderHook(() => {
      useDocumentTitle('modified title');
    });

    expect(document.title).toBe('modified title');
  });
});
