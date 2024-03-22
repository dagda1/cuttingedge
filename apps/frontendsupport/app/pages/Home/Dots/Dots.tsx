import { Box } from '@cutting/component-library';
import { Panel } from '../Panel/Panel';
import { range } from '@cutting/util';
import { useRef } from 'react';
import { Dot } from './Dot/Dot';
import { useIsomorphicLayoutEffect } from '@cutting/hooks';
import { assert } from '@cutting/assert';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { horizontalLoop } from './horizontalLoop';

const numberOfDots = [...range(9)] as const;

interface DotsProps {
  width?: number;
}

export function Dots({ width }: DotsProps): JSX.Element {
  const dots = useRef<HTMLDivElement>(null);
  const ctx = useRef<gsap.Context>();

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useIsomorphicLayoutEffect(() => {
    function main() {
      if (!width) {
        return;
      }

      assert(!!dots.current);

      ctx.current = gsap.context(() => {
        const loop = horizontalLoop('.dots .dot' as unknown as HTMLElement[], { repeat: -1, speed: 0.85 });
        const slow = gsap.to(loop, { timeScale: 0, duration: 0.5 });

        loop.timeScale(0);

        ScrollTrigger.observe({
          target: document,
          type: 'pointer,touch,wheel',
          wheelSpeed: -1,
          onChange: (self) => {
            loop.timeScale(Math.abs(self.deltaX) > Math.abs(self.deltaY) ? -self.deltaX : -self.deltaY); // whichever direction is bigger
            slow.invalidate().restart(); // now decelerate
          },
        });
      });
    }

    setTimeout(main, 1000);
  }, [width]);

  return (
    <Panel overflowX="hidden">
      <Box
        component="ul"
        className="dots"
        ref={dots}
        display="flex"
        flexDirection="row"
        flexWrap="nowrap"
        overflow="hidden"
      >
        {numberOfDots.map((_, i) => (
          <Dot key={i} background={i == 4 ? '#ffffff' : '#1f1f1f'} />
        ))}
      </Box>
    </Panel>
  );
}
