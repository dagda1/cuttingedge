import pxtoFactory from './pxlToFactory';

export const rem: (value: string | number, base?: string | number) => string = pxtoFactory('rem');
