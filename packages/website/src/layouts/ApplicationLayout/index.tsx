import { Heading } from '@cutting/component-library';
import cs from 'classnames';
import React from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

const styles = require('./ApplicationLayout.module.scss');

export interface ApplicationLayoutProps {
  heading?: string;
  italicise?: boolean;
  center?: boolean;
  className?: 'string';
}

export const ApplicationLayout: React.FC<ApplicationLayoutProps> = ({
  heading,
  italicise,
  center,
  className,
  children,
}) => (
  <>
    <Header />
    <main className={className}>
      {heading && (
        <Heading
          className={cs({
            [styles.italic]: italicise,
            [styles.center]: center,
          })}
        >
          {heading}
        </Heading>
      )}
      {children}
    </main>
    <Footer />
  </>
);
