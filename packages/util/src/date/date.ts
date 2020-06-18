export const isDate = (d?: unknown): d is Date => d instanceof Date && !isNaN(d as any);
