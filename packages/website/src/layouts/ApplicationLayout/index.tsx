import * as React from 'react';
import { Wrap, Layout, GelItem } from '@cutting/react-gel';
import { Heading } from '@cutting/component-library';
import * as cs from 'classnames';

export interface ApplicationLayoutProps {
  heading?: string;
  italicise?: boolean;
}

const styles = require('./ApplicationLayout.scss');

export const ApplicationLayout: React.StatelessComponent<ApplicationLayoutProps> = ({
  heading,
  italicise,
  children
}) => (
  <>
    <Wrap className={styles.main}>
      {heading && (
        <Layout>
          <GelItem>
            <Heading className={cs({ [styles.italic]: italicise })}>{heading}</Heading>
          </GelItem>
        </Layout>
      )}
      <>{children}</>
    </Wrap>
  </>
);
