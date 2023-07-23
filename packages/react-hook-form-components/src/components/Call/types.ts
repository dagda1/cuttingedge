export type CallType =
  | 'frontend-productivity-transformation'
  | 'one-shot-migration'
  | 'frontend-strategy-consult'
  | 'rescue'
  | 'mentoring'
  | 'consulting'
  | 'critical'
  | 'chat';

export interface CallProps {
  callType: CallType;
  rootElementId?: string;
}
