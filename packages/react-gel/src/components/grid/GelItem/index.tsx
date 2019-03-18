import React from 'react';
import cs from 'classnames';
import { BreakPointProps } from '../../..';
import { gridItemAdapter } from '../../../util/grid';

export interface GelItemProps extends BreakPointProps {
  Tag?: any;
  className?: string;
  w?: string;
}

export const GelItem: React.SFC<GelItemProps> = ({ Tag, className, children, w, s, m, l, xl, xxl, ...rest }) => (
  <Tag className={cs('gel-layout__item', gridItemAdapter({ w, s, m, l, xl, xxl }), className, { ...rest })}>
    {children}
  </Tag>
);

GelItem.defaultProps = {
  Tag: 'div'
};

GelItem.displayName = 'GelItem';
