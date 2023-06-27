import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Box, Heading, breakpoints } from '@cutting/component-library';
import { useParentSize } from '@cutting/use-get-parent-size';
import { useRef } from 'react';
import { useIsomorphicLayoutEffect } from '@cutting/hooks';
import { assert } from 'assert-ts';

export function Snapper(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width = 1 } = useParentSize(containerRef, { debounceDelay: 500 });

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    window.scrollTo(0, 0);
  }, [width]);

  useIsomorphicLayoutEffect(() => {
    function main() {
      if (width < breakpoints.desktop || document.querySelector('.pin-spacer')) {
        return;
      }

      assert(!!containerRef.current);

      const sections = gsap.utils.toArray<HTMLDivElement>('.section');

      const ctx = gsap.context(() => {
        for (const section of sections) {
          ScrollTrigger.create({
            trigger: section,
            start: 'top top',
            scrub: true,
            pin: true,
            pinSpacing: false,
            markers: true,
          });
        }

        ScrollTrigger.create({
          snap: {
            snapTo: 1 / (sections.length - 1),
            duration: 0.5,
          },
          // start: 'top top',
          // end: '+=' + 100 * (sections.length - 1) + '%',
        });
      });

      return () => {
        return ctx && ctx.revert();
      };
    }

    setTimeout(main, 1000);
  }, [width]);

  return (
    <>
      <Box className="sections" position="relative" height="full" width="full" ref={containerRef}>
        <Box
          component="section"
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="full"
          width="full"
          className="section first orange"
        >
          <Heading level="1">Section 1</Heading>
        </Box>
        <Box
          component="section"
          position="relative"
          display="flex"
          className="section second blue"
          justifyContent="center"
          alignItems="center"
          height="full"
          width="full"
        >
          <Heading level="1">Section 2</Heading>
        </Box>
        <Box
          component="section"
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
          className="section third purple"
          height="full"
          width="full"
        >
          <Heading level="1">Section 3</Heading>
        </Box>
        <Box
          component="section"
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="full"
          width="full"
          className="section fourth gray"
        >
          <Heading level="1">Section 4</Heading>
        </Box>
      </Box>
    </>
  );
}
