import React from 'react';
import cs from 'classnames';
import { Taggable } from '@cutting/util';

export interface WrapProps {
  Tag?: Taggable;
  className?: string;
}

export const Wrap: React.SFC<WrapProps> = ({ Tag = 'div', className, children }) => (
  <Tag className={cs('gel-wrap', className)}>{children}</Tag>
);

Wrap.displayName = 'Wrap';
