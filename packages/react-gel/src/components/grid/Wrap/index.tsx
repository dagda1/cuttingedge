import * as React from 'react';
import * as cs from 'classnames';

export interface WrapProps {
  Tag?: any;
  className?: string;
}

export const Wrap: React.StatelessComponent<WrapProps> = ({ Tag, className, children }) => (
  <Tag className={cs('gel-wrap', className)}>{children}</Tag>
);

Wrap.defaultProps = {
  Tag: 'div'
};

Wrap.displayName = 'Wrap';
