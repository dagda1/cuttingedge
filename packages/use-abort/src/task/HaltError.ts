export class HaltError extends Error {
  get __isEffectionHaltError() {
    return true;
  }

  constructor() {
    super('halted');
  }
}

export function isHaltError(value: any): value is HaltError {
  return !!(value && value.__isEffectionHaltError);
}

export function swallowHalt(error: any) {
  if (!isHaltError(error)) {
    throw error;
  }
}
