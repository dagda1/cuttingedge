import { ComponentType } from 'react';

export interface PageRoute {
  url?: string;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  component: ComponentType<any>;
  heading?: string;
  exact?: boolean;
}
