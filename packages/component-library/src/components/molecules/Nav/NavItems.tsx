import type { ReactNode } from 'react';

interface NavItemsProps {
  children: ReactNode;
}
export function NavItems({ children }: NavItemsProps): JSX.Element {
  return <>{children}</>;
}
