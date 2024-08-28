/* eslint-disable @typescript-eslint/no-explicit-any */
let dataMemory: { [key: string]: any } = {};

interface Storage {
  readonly length: number;
  clear(): void;
  getItem(key: string): string | null;
  removeItem(key: string): void;
  setItem(key: string, value: string): void;
}

export class MemoryStorage {
  static setItem(key: string, value: any): any {
    dataMemory[key] = value;
    return dataMemory[key];
  }

  static getItem(key: string): any {
    return Object.prototype.hasOwnProperty.call(dataMemory, key) ? dataMemory[key] : undefined;
  }

  static removeItem(key: string): boolean {
    return delete dataMemory[key];
  }

  static clear(): typeof dataMemory {
    dataMemory = {};
    return dataMemory;
  }

  static key(index: number): string {
    return dataMemory[index];
  }
}

type StorageType = 'sessionStorage' | 'localStorage';

export class StorageHelper implements Storage {
  private storageWindow: Storage;

  getItem(key: string): string | null {
    return this.getStorage().getItem(key);
  }

  setItem(key: string, value: string): void {
    this.getStorage().setItem(key, value);
  }

  removeItem(key: string): void {
    this.getStorage().removeItem(key);
  }

  clear(): void {
    this.getStorage().clear();
  }

  get length(): number {
    return this.getStorage().length;
  }

  constructor(storageType: StorageType) {
    try {
      this.storageWindow = window[storageType];
      this.storageWindow.setItem('cutting.test-ls', '1');
      this.storageWindow.removeItem('cutting.test-ls');
    } catch {
      this.storageWindow = MemoryStorage;
    }
  }

  getStorage(): Storage {
    return this.storageWindow;
  }
}
