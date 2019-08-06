import uniqueId from 'lodash/uniqueId';

export const prefixId = (prefix = 'ctrl'): string => `${prefix}${uniqueId()}`;
