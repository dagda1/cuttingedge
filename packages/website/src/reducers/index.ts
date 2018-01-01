import { combineReducers } from 'redux';
import { LOCATION_CHANGE } from 'react-router-redux';
import reducerBuilder from './builder';

const routeInitialState = { location: null };

const routeReducer = reducerBuilder(routeInitialState).build({
  [LOCATION_CHANGE]: (state, action) => ({
    ...state,
    location: action.location
  })
});

export default combineReducers({
  route: routeReducer
});
