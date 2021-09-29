import type { ChangeEventHandler } from 'react';

export type CheckableLayout = 'inline' | 'stacked';

export type CheckableValueType = string | ReadonlyArray<string> | number;

export type CheckableProps<V extends CheckableValueType> = {
  id?: string;
  name?: string;
  checked?: boolean;
  value: V;
};

export interface CheckableEventHandlers {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export type CheckableSize = 'small' | 'large';

export interface CheckableLayoutProps {
  layout: CheckableLayout;
  size: CheckableSize;
}
