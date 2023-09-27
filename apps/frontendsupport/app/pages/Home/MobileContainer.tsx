import type { BoxProps } from '@cutting/component-library';
import { Box } from '@cutting/component-library';
import { useRef, type ReactNode, useMemo, useState, useCallback } from 'react';
import * as styles from './HomeMobile.css';
import cs from 'classnames';
import { getImagePropsFromMap } from '~/components/LazyLoadedImage/getImagePropsFromMap';
import { blurhashToGradientCssObject } from '@unpic/placeholder';
import { useIsomorphicLayoutEffect } from '@cutting/hooks';

interface MobileContainerProps {
  children: ReactNode;
  backgroundImage: string;
  height?: BoxProps['height'];
}

type BgBoxProps = Pick<MobileContainerProps, 'backgroundImage'> & { className?: string };

const BgBox = function ({ className, backgroundImage }: BgBoxProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      setVisible(true);
    }
  }, []);

  useIsomorphicLayoutEffect(() => {
    const observer = new IntersectionObserver(callback, {
      rootMargin: '0px',
      threshold: 0.1,
      root: null,
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      console.log('cleaning');
      if (containerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(containerRef.current);
      }
    };
  }, [callback]);

  const style = useMemo(() => {
    if (visible) {
      return { backgroundImage: `url(${backgroundImage})` };
    }
    const { blurhash } = getImagePropsFromMap(backgroundImage);
    return blurhashToGradientCssObject(blurhash);
  }, [backgroundImage, visible]);

  return <Box ref={containerRef} style={style} className={cs(className, styles.bg)}></Box>;
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
