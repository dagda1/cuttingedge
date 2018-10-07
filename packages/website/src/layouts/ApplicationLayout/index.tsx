import { Heading } from '@cutting/component-library';
import { GelItem, Layout, Wrap } from '@cutting/react-gel';
import * as cs from 'classnames';
import * as React from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

export interface ApplicationLayoutProps {
  heading?: string;
  italicise?: boolean;
  center?: boolean;
}

const styles = require('./ApplicationLayout.scss');

export const ApplicationLayout: React.SFC<ApplicationLayoutProps> = ({ heading, italicise, center, children }) => (
  <Wrap>
    <Header />
    <main className={cs(styles.main, 'wrapper')}>
      {heading && (
        <Wrap>
          <Layout>
            <GelItem>
              <Heading className={cs({ [styles.italic]: italicise, [styles.center]: center })}>{heading}</Heading>
            </GelItem>
          </Layout>
        </Wrap>
      )}
      <Wrap>
        <Layout>
          <GelItem>{children}</GelItem>
        </Layout>
      </Wrap>
    </main>
    <Footer />
  </Wrap>
);
