import * as styles from './TopNav.css';
import Link from 'next/link';
import { LinkWrapper } from '../LinkWrapper/LinkWrapper';
import type { ReactNode } from 'react';
import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { getImageSrc } from '../../util/image';
import { WorkWithUsButton } from '../WorkWIthUsButton/WorkWIthUsButton';

const NavLinks: { content: ReactNode; href: string }[] = [
  { content: <strong>Healthcheck</strong>, href: '/productivity-test/1' },
  // { content: 'Subscribe', href: '/subscribe' },
  { content: 'Blog', href: '/blog' },
  { content: 'About', href: '/about' },
  { content: 'Contact', href: '/contact' },
];

const createNav = (onClick?: React.MouseEventHandler) => (
  <>
    {NavLinks.map(({ content, href }) => (
      <li key={href}>
        <LinkWrapper linkType="anchor" onClick={onClick} href={href}>
          {content}
        </LinkWrapper>
      </li>
    ))}
  </>
);
/* eslint-disable jsx-a11y/anchor-is-valid */
export function TopNav(): JSX.Element {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <ul className={styles.left}>
          <li className={styles.logoContainer}>
            <Link href="/" passHref>
              <a>
                <img alt="cutting edge solutions" src={getImageSrc('/frontenddx.png')} placeholder="blur" />
              </a>
            </Link>
          </li>
          <li>
            <WorkWithUsButton />
          </li>
        </ul>
        <nav className={styles.root}>
          <ul className={styles.navList}>{createNav()}</ul>
        </nav>
        <div className={styles.mobileMenu}>
          <Hamburger toggle={setOpen} toggled={isOpen} />
          {isOpen && (
            <nav className={styles.mobileNav}>
              <ul>
                <li key={'/'}>
                  <LinkWrapper linkType="anchor" onClick={() => setOpen(false)} href={'/'}>
                    HOME
                  </LinkWrapper>
                </li>
                {createNav(() => setOpen(false))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
}
