import React from 'react';

export type Refable<T> = React.ReactElement<T> & {
  ref: React.RefObject<T>;
};

export interface Shortcut {
  keySequence: string;
  action: (...args: any[]) => any;
}

export type CreateShortcuts = (props: any, instance?: React.ReactNode) => Shortcut[];
