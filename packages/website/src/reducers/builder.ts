import HandlerBuilder from 'handler-builder';
import { Action } from 'redux';

export default <T>(initialState: T) =>
  new HandlerBuilder<string>(
    (state: T = initialState, action: Action) => action.type,
    (state: T = initialState, action: Action) => state
  );
