import type { FC } from 'react';
import { footerPages } from '../../routes';
import { NavLink } from 'react-router-dom';
import { ExternalLink } from '@cutting/component-library';

import { Cow } from '../../components/Svg/Cow';
import { Github } from '../../components/Svg/Github';
import { Twitter } from '../../components/Svg/Twitter';

export const Footer: FC = () => (
  <footer role="contentinfo">
    <div>
      <div>
        <div>
          <div>
            <Cow />
          </div>
        </div>
        <span>Paul Cowan</span>
      </div>
      <div>
        <ul>
          {footerPages.map((page) => (
            <li key={page.path}>
              <NavLink to={page.path}>{page.heading}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div>
      <div>
        <div>
          <ul>
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
        <div>Copyright © Cutting-Edge Solutions (Scotland) inc. All rights reserved</div>
      </div>
    </div>
  </footer>
);
