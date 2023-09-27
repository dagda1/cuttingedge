import { useRef, useState, useCallback, useMemo } from 'react';
import { Box, type BoxProps } from '@cutting/component-library';
import { useIsomorphicLayoutEffect } from '@cutting/hooks';
import { getImagePropsFromMap } from '../LazyLoadedImage/getImagePropsFromMap';
import { blurhashToGradientCssObject } from '@unpic/placeholder';
import cs from 'classnames';
import * as styles from './LazyBackgroundImage.css';

interface LazyBackgroundImageProps {
  backgroundImage: string;
  height?: BoxProps['height'];
  className?: string;
  backgroundStyle: 'static' | 'repeat';
}
export function LazyBackgroundImage({
  className,
  backgroundImage,
  backgroundStyle,
  height,
}: LazyBackgroundImageProps): JSX.Element {
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

  return (
    <Box
      ref={containerRef}
      style={style}
      height={height}
      className={cs(className, styles.bg, {
        [styles.bgRepeat]: backgroundStyle === 'repeat',
        [styles.bgStatic]: backgroundStyle == 'static',
      })}
    ></Box>
  );
}
