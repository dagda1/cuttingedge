import * as React from 'react';
import { Menu } from '../Menu';

export interface PageMakerProps {
  Comp: React.ComponentType<any>;
}

export const pageMaker = ({ Comp }: PageMakerProps) => props => (
  <>
    <Menu />
    <div>
      <Comp {...props} />
    </div>
  </>
);
