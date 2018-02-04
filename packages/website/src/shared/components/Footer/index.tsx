import * as React from 'react';
import { Wrap, Layout, GelItem } from '@cutting/react-gel';
import { Cow, Github, Twitter } from '@cutting/component-library';

const styles = require('./Footer.scss');

export const Footer: React.StatelessComponent = () => (
  <footer className="wrapper">
    <Wrap className="wrapper">
      <Layout>
        <GelItem m="1/3">
          <Layout>
            <GelItem m="1/2" className={styles.logo}>
              <div className={styles.logo__container}>
                <div>
                  <Cow />
                </div>
              </div>
              <span className={styles.name}>Paul Cowan</span>
            </GelItem>
            <GelItem m="1/2">
              <ul className={styles.links}>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
              </ul>
            </GelItem>
          </Layout>
        </GelItem>
        <GelItem m="2/3">
          <Layout>
            <GelItem className={styles.contact}>
              <div>
                <ul className={styles.social}>
                  <li>
                    <a href="https://github.com/dagda1" target="_blank">
                      <Github />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/dagda1" target="_blank">
                      <Twitter />
                    </a>
                  </li>
                </ul>
                <a className={styles.email} href="mailto:dagda1@scotalt.net">
                  dagda1@scotalt.net
                </a>
              </div>
              <div className={styles.copyright}>
                Copyright © Cutting-Edge Solutions (Scotland) inc. Al rights reserved
              </div>
            </GelItem>
          </Layout>
        </GelItem>
      </Layout>
    </Wrap>
  </footer>
);
