export declare class MemoryStorage {
  static setItem(key: string, value: any): any;
  static getItem(key: string): any;
  static removeItem(key: string): boolean;
  static clear(): {
    [key: string]: any;
  };
  static key(index: number): string;
}
export declare class StorageHelper {
  private storageWindow;
  constructor();
  getStorage(): Storage;
}
export declare const storageHelper: StorageHelper;
//# sourceMappingURL=index.d.ts.map
