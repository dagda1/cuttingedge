import { Combination, Sequence, ShortcutItem } from '../types';
import isObject from 'lodash/isObject';

export const isCombination = (o: unknown): o is ShortcutItem<Combination> => {
  if (!isObject(o)) {
    return false;
  }

  const keys = Object.keys(o);

  return keys.length > 0 && keys[0] === 'combination';
};

export const isSequence = (o: unknown): o is Sequence => {
  if (!isObject(o)) {
    return false;
  }

  const keys = Object.keys(o);

  return keys.length > 0 && keys[0] === 'sequence';
};
