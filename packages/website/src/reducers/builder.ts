import HandlerBuilder from 'handler-builder';
import { Action } from 'redux';

export default (initialState: Object) =>
  new HandlerBuilder<string>(
    (state = initialState, action) => action.type,
    (state = initialState, action: Action) => state
  );
