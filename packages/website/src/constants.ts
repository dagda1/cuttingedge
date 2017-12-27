export enum Environment {
  development = 'development',
  test = 'test',
  production = 'production'
}

export const isDevelopment = process.env.NODE_ENV === Environment.development;
export const isTest = process.env.NODE_ENV === Environment.test;
export const isProduction = process.env.NODE_ENV === Environment.production;
