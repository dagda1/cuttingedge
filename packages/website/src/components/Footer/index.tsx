import React from 'react';
import { Cow, Github, Twitter } from '../Svg';
import { footerPages } from '../../routes';
import { NavLink } from 'react-router-dom';

const styles = require('./Footer.scss');

export const Footer: React.FC = () => (
  <footer role="contentinfo">
    <div className={styles.left}>
      <div className={styles.logo}>
        <div className={styles.logo__container}>
          <div>
            <Cow />
          </div>
        </div>
        <span className={styles.name}>Paul Cowan</span>
      </div>
      <div className={styles.links}>
        <ul className={styles.NavLinks}>
          {footerPages.map((page) => (
            <li key={page.path}>
              <NavLink to={page.path}>{page.heading}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className={styles.right}>
      <div className={styles.contact}>
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
        <div className={styles.copyright}>Copyright © Cutting-Edge Solutions (Scotland) inc. All rights reserved</div>
      </div>
    </div>
  </footer>
);
