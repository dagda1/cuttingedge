import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { history } from '../routes/history';

export default combineReducers({ router: connectRouter(history) });
