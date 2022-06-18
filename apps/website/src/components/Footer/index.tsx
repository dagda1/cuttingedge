import { footerPages } from '../../routes';
import { NavLink } from 'react-router-dom';
import { ExternalLink } from '@cutting/component-library';

import * as styles from './Footer.css';
import { Cow } from '../Svg/Cow';
import { Github } from '../Svg/Github';
import { Twitter } from '../Svg/Twitter';

export function Footer(): JSX.Element {
  return (
    <>
      <div className={styles.left}>
        <div className={styles.logo}>
          <div className={styles.seal}>
            <div>
              <a href="https://ssl.comodo.com/ev-ssl-certificates.php" id="comodoTL">
                {' '}
              </a>
            </div>
          </div>
        </div>
        <div className={styles.logo}>
          <div className={styles.logoContainer}>
            <div>
              <Cow />
            </div>
          </div>
          <span className={styles.name}>Paul Cowan</span>
        </div>

        <div className={styles.links}>
          <ul>
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
                  <Github />
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://twitter.com/dagda1" ariaLabel="twitter profile">
                  <Twitter />
                </ExternalLink>
              </li>
            </ul>
            <ExternalLink href="mailto:paul.cowan@cutting.scot">paul.cowan@cutting.scot</ExternalLink>
          </div>
          <div className={styles.copyright}>Copyright © Cutting-Edge Solutions (Scotland) inc. All rights reserved</div>
        </div>
      </div>
    </>
  );
}
