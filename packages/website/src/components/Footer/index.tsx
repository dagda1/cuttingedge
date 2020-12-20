import type { FC } from 'react';
import { Cow, Github, Twitter } from '../Svg';
import { footerPages } from '../../routes';
import { NavLink } from 'react-router-dom';
import { ExternalLink } from '@cutting/component-library';

import styles from './Footer.module.scss';

export const Footer: FC = () => (
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
              <ExternalLink href="https://github.com/dagda1" ariaLabel="Github profile">
                <Github></Github>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://twitter.com/dagda1" ariaLabel="twitter profile">
                <Twitter></Twitter>
              </ExternalLink>
            </li>
          </ul>
          <ExternalLink href="mailto:paul.cowan@cutting.scot">paul.cowan@cutting.scot</ExternalLink>
        </div>
        <div className={styles.copyright}>Copyright © Cutting-Edge Solutions (Scotland) inc. All rights reserved</div>
      </div>
    </div>
  </footer>
);
