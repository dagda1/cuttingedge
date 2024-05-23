import { List, Popover } from '@cutting/component-library';
import { type ReactNode, useCallback, useState } from 'react';

import { TextNavLink } from '../TextNavLink/TextNavLink';

const Links: { to: `/${string}`; children: ReactNode }[] = [
  { to: '/viz', children: 'SINE' },
  {
    to: '/viz/sinusoidal',
    children: <>SINUSOIDAL</>,
  },
  { to: '/viz/function-plot', children: 'FUNCTIONS' },
  { to: '/viz/sine2', children: 'MORE SINE' },
  { to: '/viz/tan', children: 'TAN' },
  { to: '/viz/polar', children: 'POLAR' },
  { to: '/viz/dotproduct2d', children: <>DOTPRODUCT 3D</> },
];

interface VizPopoverProps {
  hideExpanded: () => void;
}

export function VizPopover({ hideExpanded }: VizPopoverProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = useCallback(() => {
    setIsOpen(false);
    hideExpanded();
  }, [hideExpanded]);

  return (
    <Popover isOpen={isOpen} setIsOpen={setIsOpen} heading="VIZ">
      <List type="none">
        {Links.map(({ to, children }) => (
          <TextNavLink key={to} onClick={clickHandler} to={to}>
            {children}
          </TextNavLink>
        ))}
      </List>
    </Popover>
  );
}
