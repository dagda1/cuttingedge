import type { ChangeEventHandler, FocusEventHandler, Ref } from 'react';

export type CheckableLayout = 'inline' | 'stacked';

export type CheckableValueType = string | ReadonlyArray<string> | number;

export interface CheckableProps<V extends CheckableValueType> {
  id?: string;
  name?: string;
  checked?: boolean;
  value: V;
  innerRef?: Ref<HTMLInputElement>;
}

export interface CheckableEventHandlers {
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
}

export type CheckableSize = 'small' | 'large';

export interface CheckableLayoutProps {
  checkableLayout: CheckableLayout;
  checkableSize: CheckableSize;
}
