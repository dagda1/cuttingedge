import { Children } from 'react';
import type { BoxProps } from '../Box/Box.js';
import { Box } from '../Box/Box.js';
import { Divider } from '../Divider/Divider.js';
import * as styles from './Tiles.css.js';
import type { ReactNodeNoStrings } from '../Stack/Stack.js';
import type { RequiredResponsiveValue } from '~/style/atoms/sprinkles.css.js';
import type { Space } from '~/style/atoms/atoms.js';
import { negativeMargin } from '~/style/negativeMargin/negativeMargin';
import flattenChildren from '~/style/util/flatten-children';
import cs from 'classnames';
import { resolveResponsiveProp } from '~/style/util/resolveResponsiveProp';
import { mapResponsiveValue } from '~/style/atoms/sprinkles.css.js';

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
