export type Env = {
  NODE_ENV: string;
  VERBOSE: boolean;
  HOST: string;
  BUILD_TARGET: string;
  PUBLIC_PATH: string;
  CI: boolean;
  PUBLIC_URL: string;
  WDS_SOCKET_HOST?: string;
  WDS_SOCKET_PATH?: string;
  WDS_SOCKET_PORT?: string;
  FAST_REFRESH?: boolean;
  nodePath: string;
  PORT: number;
} & { [k: string]: any };
