import { Heading } from '@cutting/component-library';
import { GelItem, Layout, Wrap } from '@cutting/react-gel';
import cs from 'classnames';
import React from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

export interface ApplicationLayoutProps {
  heading?: string;
  italicise?: boolean;
  center?: boolean;
  className?: 'string';
}

const styles = require('./ApplicationLayout.scss');

export const ApplicationLayout: React.FunctionComponent<ApplicationLayoutProps> = ({
  heading,
  italicise,
  center,
  className,
  children
}) => (
  <Wrap>
    <Header />
    <main className={cs(styles.main, 'wrapper', className)}>
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
