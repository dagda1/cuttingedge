import { createBrowserHistory } from 'history';
import { createMemoryHistory } from 'history';
import type { RouterHistory } from '~/types/index.js';
const selectedHistory: RouterHistory = typeof window !== 'undefined' ? createBrowserHistory : createMemoryHistory;

export const history = selectedHistory();
