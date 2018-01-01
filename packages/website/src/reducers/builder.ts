import HandlerBuilder from 'handler-builder';

export default (initialState: Object) =>
  new HandlerBuilder<string>((state = initialState, action) => action.type, (state = initialState, action) => state);
