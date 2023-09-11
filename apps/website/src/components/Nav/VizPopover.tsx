import { List, Popover } from '@cutting/component-library';

import { useState, type ReactNode } from 'react';
import { TextNavLink } from '../TextNavLink/TextNavLink';

const Links: { to: `/${string}`; children: ReactNode }[] = [
  { to: '/viz', children: 'SINE' },
  { to: '/viz/function-plot', children: 'FUNCTIONS' },
  { to: '/viz/sine2', children: 'MORE SINE' },
  { to: '/viz/tan', children: 'TAN' },
];

export function VizPopover(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover isOpen={isOpen} setIsOpen={setIsOpen} heading="VIZ">
      <List type="none">
        {Links.map(({ to, children }) => (
          <TextNavLink key={to} onClick={() => setIsOpen(false)} to={to}>
            {children}
          </TextNavLink>
        ))}
      </List>
    </Popover>
  );
}
