export const decamelize = (str: string) => str.replace(/([a-z\d])([A-Z])/g, '$1_$2').toLowerCase();

export const dasherize = (str: string) => decamelize(str).replace(/[ _]/g, '-');

export type StringFunc = (s?: string | null) => string | null;
