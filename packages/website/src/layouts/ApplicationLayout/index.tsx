import { Heading } from '@cutting/component-library';
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
  <>
    <Header />
    <main className={className}>
      {heading && <Heading className={cs({ [styles.italic]: italicise, [styles.center]: center })}>{heading}</Heading>}
      {children}
    </main>
    <Footer />
  </>
);
