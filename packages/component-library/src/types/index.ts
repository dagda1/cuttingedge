import type { CSSProperties, Ref } from 'react';

export type StandardProps<C, Removals extends keyof C = never, AcceptsRef = true> = Omit<C, 'classes' | Removals> & {
  className?: string;
  style?: CSSProperties;
  dataSelector?: string;
} & {
  ref?: AcceptsRef extends true ? (C extends { ref?: infer RefType } ? RefType : Ref<unknown>) : never;
};
