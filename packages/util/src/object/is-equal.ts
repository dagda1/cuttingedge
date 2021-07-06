import { assert } from 'assert-ts';

export function isEqual<T>(left: T | T[], right: T | T[]): boolean {
  function getType(obj: T | T[]) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  }

  function areArraysEqual() {
    assert(Array.isArray(left) && Array.isArray(right), 'eiter left or right is not an array');

    if (left.length !== right.length) {
      return false;
    }

    for (let i = 0; i < left.length; i++) {
      if (!isEqual(left[i], right[i])) {
        return false;
      }
    }

    return true;
  }

  function areObjectsEqual() {
    assert(!Array.isArray(left) && !Array.isArray(right), 'eiter left or right is an array');

    if (Object.keys(left).length !== Object.keys(right).length) {
      return false;
    }

    for (const key in left) {
      if (Object.prototype.hasOwnProperty.call(left, key)) {
        if (!isEqual(left[key], right[key])) {
          return false;
        }
      }
    }

    return true;
  }

  function areFunctionsEqual() {
    assert(typeof left === 'function' && typeof right === 'function', 'either left or right is not function');
    return left.toString() === right.toString();
  }

  function arePrimativesEqual() {
    return left === right;
  }

  const type = getType(left);

  if (type !== getType(right)) {
    return false;
  }

  if (type === 'array') {
    return areArraysEqual();
  }
  if (type === 'object') {
    return areObjectsEqual();
  }
  if (type === 'function') {
    return areFunctionsEqual();
  }

  return arePrimativesEqual();
}
