import React from 'react';
import cs from 'classnames';

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
  fit?: boolean;
}

export const Layout: React.SFC<LayoutProps> = ({
  Tag,
  className,
  flush,
  middle,
  bottom,
  right,
  center,
  equal,
  auto,
  fit,
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
      'gel-layout--auto': auto,
      'gel-layout--fit': fit
    })}
  >
    {children}
  </Tag>
);

Layout.defaultProps = {
  Tag: 'div'
};

Layout.displayName = 'Layout';
