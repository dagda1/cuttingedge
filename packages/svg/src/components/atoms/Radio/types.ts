import type { ChangeEventHandler } from 'react';

export enum RadioLayout {
  inline = 'inline',
  stacked = 'stacked',
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type RadioProps<T = {}> = T & {
  id: string;
  name: string;
  checked?: boolean;
  value: string | string | number;
};

export interface RadioEventHandlers {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export interface RadioLayoutProps {
  layout: RadioLayout;
  size: RadioSize;
}

export enum RadioSize {
  small = 'small',
  large = 'large',
}
