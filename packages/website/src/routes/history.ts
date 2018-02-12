import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';
import { RouterHistory } from '../types';
const selectedHistory: RouterHistory = typeof window !== 'undefined' ? createBrowserHistory : createMemoryHistory;

export default selectedHistory();
