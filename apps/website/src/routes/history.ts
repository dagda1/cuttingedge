import { createBrowserHistory, createMemoryHistory } from 'history';

import type { RouterHistory } from '~/types/index';

const selectedHistory: RouterHistory = typeof window !== 'undefined' ? createBrowserHistory : createMemoryHistory;

export const history = selectedHistory();
