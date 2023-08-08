import type { BoxProps } from '@cutting/component-library';
import { Box } from '@cutting/component-library';
import type { ReactNode } from 'react';
import * as styles from './HomeMobile.css';
import cs from 'classnames';

interface MobileContainerProps {
  children: ReactNode;
  backgroundImage?: string;
  height?: BoxProps['height'];
}

type BgBoxProps = Pick<MobileContainerProps, 'backgroundImage'> & { className?: string };

const BgBox = function ({ className, backgroundImage }: BgBoxProps): JSX.Element {
  return (
    <Box
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
      className={cs(className, styles.bg)}
    ></Box>
  );
};

export function MobileContainer({ backgroundImage, height = 'screen', children }: MobileContainerProps): JSX.Element {
  return (
    <Box
      component="section"
      className="section"
      position="relative"
      height={height}
      width="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box className={styles.bgWrap}>
        <BgBox backgroundImage={backgroundImage} />
      </Box>
      <BgBox className={styles.desktop} backgroundImage={backgroundImage} />
      {children}
    </Box>
  );
}
