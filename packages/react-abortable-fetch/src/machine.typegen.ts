// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  eventsCausingActions: Record<string, unknown>;
  internalEvents: {
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: Record<string, unknown>;
  missingImplementations: {
    actions: never;
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingServices: Record<string, unknown>;
  eventsCausingGuards: Record<string, unknown>;
  eventsCausingDelays: Record<string, unknown>;
  matchesStates: 'ready' | 'loading' | 'succeeded' | 'error' | 'aborted';
  tags: never;
}
