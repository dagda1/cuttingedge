import { createBrowserHistory } from 'history';
import { createMemoryHistory } from 'history';
import { RouterHistory } from '../types';
const selectedHistory: RouterHistory = typeof window !== 'undefined' ? createBrowserHistory : createMemoryHistory;

export const history = selectedHistory();
