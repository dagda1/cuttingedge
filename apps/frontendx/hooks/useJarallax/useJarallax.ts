import { useEffect } from 'react';

export function useJarallax(): void {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    (async () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const pkg = await import('jarallax');

      const { jarallax, jarallaxElement } = pkg;

      jarallaxElement();

      jarallax(document.querySelectorAll('[data-jarallax-element]'));
      jarallax(document.querySelectorAll('.jarallax'), {
        type: 'scroll-opacity',
        speed: 0.5,
      });
    })();
  }, []);
}
