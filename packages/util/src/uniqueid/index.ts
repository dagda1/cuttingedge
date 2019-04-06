export interface IdCounter {
    [key: string]: number;
}

const idCounter: IdCounter = {};

export const uniqueId = (prefix: string = ''): string => {
    if (!idCounter[prefix]) {
        idCounter[prefix] = 0;
    }

    const id = ++idCounter[prefix];
    return `${prefix + id}`;
};
