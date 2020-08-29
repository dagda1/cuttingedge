export const isDate = (d?: unknown): d is Date => !isNaN(d as number) && d instanceof Date;
