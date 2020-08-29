export const decamelize = (str: string): string => str.replace(/([a-z\d])([A-Z])/g, '$1_$2').toLowerCase();

export const dasherize = (str: string): string => decamelize(str).replace(/[ _]/g, '-');
