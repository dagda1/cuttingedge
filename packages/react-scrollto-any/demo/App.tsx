import * as React from 'react';
import { Wrap, Layout, GelItem } from '@cutting/react-gel';
import { range, partialRight } from 'lodash';

import { scrollToElement } from '../src';

const styles = require('./App.scss');

const scrollToLinkHandler: any = (e: React.MouseEvent<any>, index: number) => {
  const selector = index === 1 ? 'nav ul li a:first-of-type' : 'nav ul li:last-of-type a';

  scrollToElement(selector, { container: `.${styles.sidebar}`, offset: -200, duration: 1000 })();
};

export const App = () => (
  <>
    <header>
      <Wrap>
        <Layout>
          <GelItem className={styles.header}>
            <h1>Scroll To Any element</h1>
          </GelItem>
        </Layout>
      </Wrap>
    </header>
    <main>
      <div className={styles.sidebar}>
        <nav>
          <ul>
            {range(2, 51).map(i => (
              <li key={i}>
                <h3>Nav Item {i}</h3>
                {(i === 1 || i === 50) && (
                  <a onClick={partialRight(scrollToLinkHandler, i)} role="button" href="#">
                    Scroll To {i === 1 ? 'bottom' : 'top'}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.main}>Main</div>
    </main>
  </>
);
