import produce from 'immer';
import type { Reducer } from 'react';

type State = Record<string, unknown>;

type Actions = Record<string, unknown>;

export const reducer: Reducer<State, Actions> = produce((state, action) => {});
