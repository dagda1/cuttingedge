export const isDate = (d?: unknown): d is Date => d instanceof Date && !isNaN((d as unknown) as number);
