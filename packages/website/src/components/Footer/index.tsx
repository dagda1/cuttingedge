import React from 'react';
import { Wrap, Layout, GelItem } from '@cutting/react-gel';
import { Cow, Github, Twitter } from '../Svg';
import { footerPages } from '../../routes';
import { NavLink } from 'react-router-dom';

const styles = require('./Footer.scss');

export const Footer: React.FunctionComponent = () => (
  <footer role="contentinfo">
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
            <GelItem m="1/2" className={styles.links}>
              <ul className={styles.NavLinks}>
                {footerPages.map((page) => (
                  <li key={page.path}>
                    <NavLink to={page.path}>{page.heading}</NavLink>
                  </li>
                ))}
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
                    <a href="https://github.com/dagda1" target="_blank" rel="noopener noreferrer">
                      <Github />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/dagda1" target="_blank" rel="noopener noreferrer">
                      <Twitter />
                    </a>
                  </li>
                </ul>
                <a className={styles.email} href="mailto:paul.cowan@cutting.scot">
                  paul.cowan@cutting.scot
                </a>
              </div>
              <div className={styles.copyright}>
                Copyright © Cutting-Edge Solutions (Scotland) inc. All rights reserved
              </div>
            </GelItem>
          </Layout>
        </GelItem>
      </Layout>
    </Wrap>
  </footer>
);
