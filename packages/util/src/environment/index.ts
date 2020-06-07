export enum environments {
  development = 'development',
  test = 'test',
  production = 'production',
}

export type Environments = {
  [key in keyof environments]: environments;
};

export const env = environments[process.env.NODE_ENV as environments] || environments.development;

export const isDevelopment = env === environments.development;
export const isTest = env === environments.test;
export const isProduction = env === environments.production;
