/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
let dataMemory: { [key: string]: any } = {};

export class MemoryStorage {
  static setItem(key: string, value: any): any {
    dataMemory[key] = value;
    return dataMemory[key];
  }

  static getItem(key: string) {
    return Object.prototype.hasOwnProperty.call(dataMemory, key) ? dataMemory[key] : undefined;
  }

  static removeItem(key: string) {
    return delete dataMemory[key];
  }

  static clear() {
    dataMemory = {};
    return dataMemory;
  }

  static key(index: number): string {
    return dataMemory[index];
  }
}

export class StorageHelper {
  private storageWindow: Storage;

  constructor() {
    try {
      this.storageWindow = window.sessionStorage as Storage;
      this.storageWindow.setItem('cutting.test-ls', '1');
      this.storageWindow.removeItem('cutting.test-ls');
    } catch (exception) {
      this.storageWindow = MemoryStorage;
    }
  }

  getStorage() {
    return this.storageWindow;
  }
}

export const storageHelper = new StorageHelper();
