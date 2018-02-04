import * as React from 'react';
import { Header } from '../Header';
import { Wrap, Layout, GelItem } from '@cutting/react-gel';
import * as cs from 'classnames';

const styles = require('./Page.scss');

export interface PageMakerProps {
  Comp: React.ComponentType<any>;
}

export const pageMaker = ({ Comp }: PageMakerProps) => props => (
  <>
    <Header />
    <Wrap className={cs('wrapper', styles.container)}>
      <Layout>
        <GelItem>
          <Comp {...props} />
        </GelItem>
      </Layout>
    </Wrap>
  </>
);
