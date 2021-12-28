import type { ChangeEventHandler } from 'react';
export declare type RadioLayout = 'inline' | 'stacked';
export declare type RadioProps<T = {}> = T & {
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
export declare type RadioSize = 'small' | 'large';
//# sourceMappingURL=types.d.ts.map
