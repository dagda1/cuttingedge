import { Env } from '../types/env';
export declare const nodePath: string;
export declare function getClientEnv(
  target?: string,
  options?: Partial<Env>,
  additional?: {},
): {
  raw: Env;
  stringified: Partial<Env>;
};
//# sourceMappingURL=env.d.ts.map
