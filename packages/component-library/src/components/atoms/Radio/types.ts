import type { ChangeEventHandler } from 'react';

export type RadioLayout = 'inline' | 'stacked';

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

export type RadioSize = 'small' | 'large';
