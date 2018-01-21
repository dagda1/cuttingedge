import * as React from 'react';
import { Header } from '../Header';

export interface PageMakerProps {
  Comp: React.ComponentType<any>;
}

export const pageMaker = ({ Comp }: PageMakerProps) => props => (
  <>
    <Header />
    <div>
      <Comp {...props} />
    </div>
  </>
);
