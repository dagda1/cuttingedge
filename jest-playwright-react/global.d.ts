declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    page: any;
    path: string[];
    __path: string[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    __tests: any;
  }
}

export {};
