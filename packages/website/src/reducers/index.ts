import { combineReducers } from 'redux';
import { LOCATION_CHANGE, RouterState, LocationChangeAction } from 'react-router-redux';
import reducerBuilder from './builder';

const routeInitialState = { location: null };

export interface State {}

const routeReducer = reducerBuilder(routeInitialState).build({
  [LOCATION_CHANGE]: (state: RouterState, action: LocationChangeAction) => {
    return { ...state, location: action.payload };
  }
});

export default combineReducers({
  route: routeReducer
});
