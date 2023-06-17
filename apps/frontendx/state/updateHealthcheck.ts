import { FormValues } from '../types';
import deepmerge from 'deepmerge';
import { GlobalState } from 'little-state-machine';

export function updateHealthcheck(state: GlobalState, payload: FormValues): GlobalState {
  return deepmerge(state, { healthcheck: { ...payload } });
}

export default updateHealthcheck;
