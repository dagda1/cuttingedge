import { combineReducers } from 'redux';
import { LOCATION_CHANGE, LocationChangeAction } from 'react-router-redux';
import reducerBuilder from './builder';

const routeInitialState = { location: null };

const routeReducer = reducerBuilder(routeInitialState).build({
  [LOCATION_CHANGE]: (state: Object, action: LocationChangeAction) => ({
    ...state,
    location: action.payload.pathname
  })
});

export default combineReducers({
  route: routeReducer
});
