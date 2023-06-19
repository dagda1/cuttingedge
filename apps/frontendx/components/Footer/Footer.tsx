import { LinkWrapper } from '../LinkWrapper/LinkWrapper';

import * as styles from './Footer.css';

const footerPages = ['privacy policy', 'terms and conditions'];

export function Footer(): JSX.Element {
  return (
    <footer role="contentinfo" className={styles.main}>
      <div className={styles.left}>
        <div className={styles.links}>
          <ul>
            {footerPages.map((page) => (
              <li key={page}>
                <LinkWrapper
                  linkType="anchor"
                  href={`/${page.replace(/\s/g, '-')}`}
                >{`${page[0].toUpperCase()}${page.substring(1)}`}</LinkWrapper>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.right}>
        <div>Copyright © Cutting-Edge Solutions (Scotland) inc. All rights reserved</div>
      </div>
    </footer>
  );
}
