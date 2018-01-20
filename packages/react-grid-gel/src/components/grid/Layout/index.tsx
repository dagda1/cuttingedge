import * as React from 'react';
import * as cs from 'classnames';

export interface LayoutProps {
  Tag?: any;
  className?: string;
  flush?: boolean;
  bottom?: boolean;
  middle?: boolean;
  right?: boolean;
  center?: boolean;
  equal?: boolean;
  auto?: boolean;
}

export const Layout: React.StatelessComponent<LayoutProps> = ({
  Tag,
  className,
  flush,
  middle,
  bottom,
  right,
  center,
  equal,
  auto,
  children
}) => (
  <Tag
    className={cs('gel-layout', className, {
      'gel-layout--flush ': flush,
      'gel-layout--middle': middle,
      'gel-layout--bottom': bottom,
      'gel-layout--right': right,
      'gel-layout--center': center,
      'gel-layout--equal': equal,
      'gel-layout--auto': auto
    })}
  >
    {children}
  </Tag>
);

Layout.defaultProps = {
  Tag: 'div'
};

Layout.displayName = 'Layout';
