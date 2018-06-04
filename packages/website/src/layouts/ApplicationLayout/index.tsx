import * as React from 'react';
import { Wrap, Layout, GelItem } from '@cutting/react-gel';
import { Heading } from '@cutting/component-library';
import * as cs from 'classnames';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export interface ApplicationLayoutProps {
  heading?: string;
  italicise?: boolean;
}

const styles = require('./ApplicationLayout.scss');

export const ApplicationLayout: React.SFC<ApplicationLayoutProps> = ({ heading, italicise, children }) => (
  <ApplicationLayout>
    <Wrap>
      <Header />
      <main className={styles.main}>
        {heading && (
          <Layout>
            <GelItem>
              <Heading className={cs({ [styles.italic]: italicise })}>{heading}</Heading>
            </GelItem>
          </Layout>
        )}
        {children}
      </main>
      <Footer />
    </Wrap>
  </ApplicationLayout>
);
