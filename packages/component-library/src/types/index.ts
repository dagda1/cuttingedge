export type StandardProps<
  C,
  Removals extends keyof C = never,
  AcceptsRef = true
> = Omit<C, 'classes' | Removals> & {
  className?: string;
  style?: React.CSSProperties;
  dataSelector?: string;
} & {
  ref?: AcceptsRef extends true
    ? (C extends { ref?: infer RefType } ? RefType : React.Ref<unknown>)
    : never;
};
