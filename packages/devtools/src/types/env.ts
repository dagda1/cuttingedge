export type Env = {
  NODE_ENV: string;
  VERBOSE: boolean;
  HOST: string;
  BUILD_TARGET: string;
  PUBLIC_PATH: string;
  CI: boolean;
  PUBLIC_URL: string;
  FAST_REFRESH?: boolean;
  nodePath: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} & { [k: string]: any };
