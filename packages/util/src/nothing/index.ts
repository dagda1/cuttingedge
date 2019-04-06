export const isNil = <T>(a: T | null | undefined): a is null | undefined => a === undefined || a === null;
