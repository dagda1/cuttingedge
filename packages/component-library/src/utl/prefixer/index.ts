import { uniqueId } from 'lodash';

export const prefixId = (prefix = 'ctrl'): string => `${prefix}${uniqueId()}`;
