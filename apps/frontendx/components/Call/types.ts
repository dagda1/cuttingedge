export type CallType =
  | 'frontend-productivity-transformation'
  | 'one-shot-migration'
  | 'frontend-strategy-consult'
  | 'chat';

export interface CallProps {
  callType: CallType;
}
