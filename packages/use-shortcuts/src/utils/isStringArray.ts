export const isStringArray = <T>(arr: T[]): boolean => arr.every((x) => typeof x === 'string');
