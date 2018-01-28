import * as React from 'react';
import { Header } from '../Header';
import { Wrap } from '@cutting/react-gel';

export interface PageMakerProps {
  Comp: React.ComponentType<any>;
}

export const pageMaker = ({ Comp }: PageMakerProps) => props => (
  <>
    <Header />
    <Wrap>
      <Comp {...props} />
    </Wrap>
  </>
);
