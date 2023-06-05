import { footerPages } from '~/routes';
import { Column, Columns, ExternalLink, Text } from '@cutting/component-library';

import * as styles from './Footer.css';
import { Cow } from '../Svg/Cow';
import { Github } from '../Svg/Github';
import { Twitter } from '../Svg/Twitter';
import { TextNavLink } from '../TextNavLink/TextNavLink';

export function Footer(): JSX.Element {
  return (
    <Columns space="large">
      <Column>
        <div className={styles.logo}>
          <div className={styles.logoContainer}>
            <Cow />
          </div>
          <Text component="span" className={styles.name}>
            Paul Cowan
          </Text>
        </div>
        <div className={styles.links}>
          <ul>
            {footerPages.map((page) => (
              <li key={page.path}>
                <TextNavLink to={page.path}>{page.heading}</TextNavLink>
              </li>
            ))}
          </ul>
        </div>
      </Column>
      <Column>
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
          <Text component="div" className={styles.copyright}>
            Copyright © Cutting-Edge Solutions (Scotland) inc. All rights reserved
          </Text>
        </div>
      </Column>
    </Columns>
  );
}
