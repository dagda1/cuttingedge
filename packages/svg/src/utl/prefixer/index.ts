import { uniqueId } from '@cutting/util';

export const prefixId = (prefix = 'ctrl'): string => `${prefix}${uniqueId()}`;
