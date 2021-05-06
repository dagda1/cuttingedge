const onlyUnique = <T>(value: T, index: number, self: T[]) => self.indexOf(value) === index;

export const unique = <T>(arr: T[]): T[] => arr.filter(onlyUnique);
