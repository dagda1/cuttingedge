declare let __BROWSER__: boolean;
declare let __DEV__: boolean;

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.less' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.md' {
  const classes: string;
  export default classes;
}

interface ViteHotContext {
  readonly data: any

  accept(): void
  accept(cb: (mod: any) => void): void
  accept(dep: string, cb: (mod: any) => void): void
  accept(deps: readonly string[], cb: (mods: any[]) => void): void

  dispose(cb: (data: any) => void): void
  decline(): void
  invalidate(): void

  on<T extends string>(
    event: T,
    cb: (payload: any) => void
  ): void
  send<T extends string>(event: T, data?: any): void
}


interface ImportMeta {
  url: string

  readonly hot?: ViteHotContext
}
