export const axes = ['x', 'y'] as const;
export type Axis = (typeof axes)[number];
