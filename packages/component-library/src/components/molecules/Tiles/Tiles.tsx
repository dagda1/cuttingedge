import cs from 'classnames';
import { Children } from 'react';

import type { Space } from '~/style/atoms/atoms';
import type { RequiredResponsiveValue } from '~/style/atoms/sprinkles.css';
import { mapResponsiveValue } from '~/style/atoms/sprinkles.css';
import { negativeMargin } from '~/style/negativeMargin/negativeMargin';
import flattenChildren from '~/style/util/flatten-children';
import { resolveResponsiveProp } from '~/style/util/resolveResponsiveProp';

import type { BoxProps } from '../Box/Box';
import { Box } from '../Box/Box';
import { Divider } from '../Divider/Divider';
import type { ReactNodeNoStrings } from '../Stack/Stack';
import * as styles from './Tiles.css';

export interface TilesProps {
  children: ReactNodeNoStrings;
  space: RequiredResponsiveValue<Space>;
  columns: RequiredResponsiveValue<1 | 2 | 3 | 4 | 5 | 6>;
  dividers?: boolean;
  width?: BoxProps['width'];
}

export const Tiles = ({
  children,
  space = 'none',
  columns = 1,
  dividers = false,
  width = 'full',
}: TilesProps): JSX.Element => (
  <Box width={width} className={cs(negativeMargin('top', space))}>
    <Box display="flex" flexWrap="wrap" className={cs(negativeMargin('left', space))}>
      {Children.map(flattenChildren(children), (child, i) => (
        <Box
          minWidth={0}
          className={resolveResponsiveProp(
            columns,
            styles.columnsMobile,
            styles.columnsTablet,
            styles.columnsDesktop,
            styles.columnsWide,
          )}
        >
          <Box height="full" paddingTop={space} paddingLeft={space}>
            {dividers && i > 0 ? (
              <Box
                paddingBottom={space}
                display={mapResponsiveValue(columns, (column) => (column === 1 ? 'block' : 'none'))}
              >
                <Divider />
              </Box>
            ) : null}
            {child}
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
);
