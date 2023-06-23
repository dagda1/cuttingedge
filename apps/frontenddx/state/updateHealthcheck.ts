import type { FormValues } from '../types';
import deepmerge from 'deepmerge';
import type { GlobalState } from 'little-state-machine';

export function updateHealthcheck(state: GlobalState, payload: FormValues): GlobalState {
  return deepmerge(state, { healthcheck: { ...payload } });
}

export default updateHealthcheck;
