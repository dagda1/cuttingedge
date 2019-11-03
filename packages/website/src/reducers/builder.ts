/* eslint-disable @typescript-eslint/no-unused-vars */
import HandlerBuilder from 'handler-builder';
import { Action } from 'redux';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default <T>(initialState: T) =>
  new HandlerBuilder<string>(
    (state: T = initialState, action: Action) => action.type,
    (state: T = initialState, action: Action) => state,
  );
