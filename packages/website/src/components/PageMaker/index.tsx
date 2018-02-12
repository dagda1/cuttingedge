import * as React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import * as cs from 'classnames';

const styles = require('./Page.scss');

export interface PageMakerProps {
  Comp: React.ComponentType<any>;
}

export const pageMaker = ({ Comp }: PageMakerProps) => props => (
  <>
    <Header />
    <main role="main" className={cs('wrapper', styles.container)}>
      <Comp {...props} />
    </main>
    <Footer />
  </>
);
