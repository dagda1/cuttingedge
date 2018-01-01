import { createBrowserHistory, createMemoryHistory } from 'history';
import { RouterHistory } from 'src/types';
const selectedHistory = (): RouterHistory => (process.env.BROWSER ? createBrowserHistory : createMemoryHistory);

export default selectedHistory();
