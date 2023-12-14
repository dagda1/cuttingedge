import { type ReactNode, useContext } from 'react';
import { Box } from '../Box/Box';
import { ColumnsContext } from '../Columns/ColumnsContext';
import * as styles from './Column.css.js';
import cs from 'classnames';
import { optimizeResponsiveArray } from '~/style/util/optimizeResponsiveArray';

export interface ColumnProps {
  children: ReactNode;
  width?: keyof typeof styles.width | 'content';
}

export function Column({ children, width }: ColumnProps): JSX.Element {
  const {
    collapseMobile,
    collapseTablet,
    collapseDesktop,
    mobileSpace,
    tabletSpace,
    desktopSpace,
    wideSpace,
    collapsibleAlignmentChildProps,
    component,
  } = useContext(ColumnsContext);

  return (
    <Box
      component={component}
      display={component === 'span' ? 'block' : undefined}
      minWidth={0}
      width={width !== 'content' ? 'full' : undefined}
      flexShrink={width === 'content' ? 0 : undefined}
      flexGrow={1}
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      className={cs(styles.column, width !== 'content' ? styles.width[width!] : null)}
    >
      <Box
        component={component}
        paddingLeft={optimizeResponsiveArray([
          collapseMobile ? 'none' : mobileSpace,
          collapseTablet ? 'none' : tabletSpace,
          collapseDesktop ? 'none' : desktopSpace,
          wideSpace,
        ])}
        paddingTop={
          collapseMobile || collapseTablet || collapseDesktop
            ? optimizeResponsiveArray([
                collapseMobile ? mobileSpace : 'none',
                collapseTablet ? tabletSpace : 'none',
                collapseDesktop ? desktopSpace : 'none',
                'none',
              ])
            : undefined
        }
        height="full"
        {...collapsibleAlignmentChildProps}
        className={styles.columnContent}
      >
        {children}
      </Box>
    </Box>
  );
}
