import React from 'react';
import cs from 'classnames';
import { BreakPointProps } from '../../..';
import { gridItemAdapter } from '../../../util/grid';
import { Taggable } from '@cutting/util';

export interface GelItemProps extends BreakPointProps {
  Tag?: Taggable;
  className?: string;
  w?: string;
}

export const GelItem: React.FC<GelItemProps> = ({ Tag = 'div', className, children, w, s, m, l, xl, ...rest }) => (
  <Tag className={cs('gel-layout__item', gridItemAdapter({ w, s, m, l, xl }), className, { ...rest })}>{children}</Tag>
);

GelItem.displayName = 'GelItem';
