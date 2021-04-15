import { StorageHelper, MemoryStorage } from '.';
import { expect, it, describe } from '@jest/globals';

describe('storageHelper', () => {
  it('should set and remove on real storage', () => {
    const storage = new StorageHelper().getStorage();

    storage.setItem('foo', 'bar');

    expect(storage.getItem('foo')).toBe('bar');

    storage.removeItem('foo');

    storage.setItem('bar', 'foo');

    storage.clear();

    expect(storage.getItem('bar')).toBeNull();
  });

  it('should set and remove on memory storage', () => {
    MemoryStorage.setItem('foo', 'bar');

    expect(MemoryStorage.getItem('foo')).toBe('bar');

    MemoryStorage.removeItem('foo');

    MemoryStorage.setItem('bar', 'foo');

    MemoryStorage.clear();

    expect(MemoryStorage.getItem('bar')).toBeUndefined();
  });
});
