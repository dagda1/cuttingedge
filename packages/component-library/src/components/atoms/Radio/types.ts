import type { ChangeEventHandler } from 'react';

export type RadioLayout = 'inline' | 'stacked';

export type RadioValueType = string | ReadonlyArray<string> | number;

export type RadioProps<V extends RadioValueType> = {
  id?: string;
  name?: string;
  checked?: boolean;
  value: V;
};

export interface RadioEventHandlers {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export interface RadioLayoutProps {
  layout: RadioLayout;
  size: RadioSize;
}

export type RadioSize = 'small' | 'large';
