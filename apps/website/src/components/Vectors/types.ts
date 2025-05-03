export const axes = ['x', 'y', 'z'] as const;
export type Axis = (typeof axes)[number];
