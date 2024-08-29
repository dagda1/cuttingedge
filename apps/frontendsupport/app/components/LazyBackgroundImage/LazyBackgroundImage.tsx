import { assert } from '@cutting/assert';
import { Box, type BoxProps } from '@cutting/component-library';
import { useIsomorphicLayoutEffect } from '@cutting/hooks';
import { blurhashToGradientCssObject } from '@unpic/placeholder';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import cs from 'classnames';
import { useCallback, useMemo, useRef, useState } from 'react';

import { getImagePropsFromMap } from '../LazyLoadedImage/getImagePropsFromMap.js';
import * as styles from './LazyBackgroundImage.css.js';

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

    assert(!!entry, `no IntersectionObserver entry`);

    if (entry.isIntersecting) {
      setVisible(true);
    }
  }, []);

  useIsomorphicLayoutEffect(() => {
    const observer = new IntersectionObserver(callback, {
      rootMargin: '0px',
      threshold: 0,
      root: null,
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
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
      style={
        !global.IntersectionObserver || backgroundStyle === 'repeat' || !visible
          ? style
          : assignInlineVars({ [styles.backgroundImage]: `url('${backgroundImage}') no-repeat center center fixed` })
      }
      height={height}
      className={cs(className, styles.bg, {
        [styles.bgRepeat]: backgroundStyle === 'repeat',
        [styles.bgStatic]: backgroundStyle === 'static',
      })}
    ></Box>
  );
}
