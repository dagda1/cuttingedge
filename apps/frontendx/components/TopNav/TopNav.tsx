import Link from 'next/link';
import { LinkWrapper } from '../LinkWrapper/LinkWrapper';
import type { ReactNode } from 'react';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { getImageSrc } from '../../util/image';
import { WorkWithUsButton } from '../WorkWIthUsButton/WorkWIthUsButton';
import { ResponsiveImage, Nav, NavItem, NavItems } from '@cutting/component-library';

const NavLinks: { content: ReactNode; href: string }[] = [
  { content: <strong>Healthcheck</strong>, href: '/productivity-test/1' },
  // { content: 'Subscribe', href: '/subscribe' },
  { content: 'Blog', href: '/blog' },
  { content: 'About', href: '/about' },
  { content: 'Contact', href: '/contact' },
];

/* eslint-disable jsx-a11y/anchor-is-valid */
export function TopNav(): JSX.Element {
  return (
    <Nav display="flex">
      <NavItems>
        <NavItem display="Always">
          <Link href="/" passHref>
            <a>
              <ResponsiveImage
                mobile={{ src: getImageSrc('/frontenddx_mobile.png'), dimensions: { width: 160, height: 40 } }}
                tablet={{ src: getImageSrc('/frontenddx_tablet.png'), dimensions: { width: 268, height: 67 } }}
                src={getImageSrc('/frontenddx_tablet.png')}
                alt="cutting-edge logo"
              />
            </a>
          </Link>
        </NavItem>
        <NavItem display="Always">
          <WorkWithUsButton />
        </NavItem>
        {NavLinks.map(({ content, href }) => (
          <NavItem display="SubmenuMobile" key={href}>
            <LinkWrapper linkType="anchor" href={href}>
              {content}
            </LinkWrapper>
          </NavItem>
        ))}
      </NavItems>
    </Nav>
  );
}
