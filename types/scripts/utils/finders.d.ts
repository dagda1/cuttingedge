export declare const find: (cwd: string, predicate: (dir: string) => boolean, tries?: number) => string;
export declare const findAsync: (
  cwd: string,
  predicate: (dir: string) => Promise<boolean>,
  tries?: number,
) => Promise<string>;
export declare const findFile: (cwd: string, fileName: string) => string;
export declare const findAppNodeModules: (cwd: string, packageName?: string) => string;
//# sourceMappingURL=finders.d.ts.map
