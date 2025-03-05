declare let __BROWSER__: boolean;
declare let __DEV__: boolean;

declare module '*.png' {
  const pngValue: any;
  export default pngValue;
}

declare module '*.jpg' {
  const jpgValue: any;
  export default value;
}

interface ViteHotContext {
  readonly data: any;

  accept(): void;
  accept(cb: (mod: any) => void): void;
  accept(dep: string, cb: (mod: any) => void): void;
  accept(deps: readonly string[], cb: (mods: any[]) => void): void;

  dispose(cb: (data: any) => void): void;
  decline(): void;
  invalidate(): void;

  on<T extends string>(event: T, cb: (payload: any) => void): void;
  send<T extends string>(event: T, data?: any): void;
}

interface ImportMeta {
  url: string;

  readonly hot?: ViteHotContext;
}
