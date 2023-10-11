import { Box, Heading, List, Text } from '@cutting/component-library';
import { useIsomorphicLayoutEffect } from '@cutting/hooks';
import gsap from 'gsap';
import { AnotherHomePanel } from './AnotherHomePanel';
import { useParentSize } from '@cutting/use-get-parent-size';
import { useRef } from 'react';
import { BreakGlass } from '../Panels/BreakGlass/BreakGlass';
import ScrollTrigger from 'gsap/ScrollTrigger';
import * as styles from './AnotherHome.css';
import { assert } from 'assert-ts';

export function AnotherNewHome(): JSX.Element {
  const container = useRef<HTMLDivElement>(null);
  const { width } = useParentSize(container, { debounceDelay: 500 });
  const breakglassRef = useRef<HTMLDivElement>(null);
  const ctx = useRef<gsap.Context>();

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    window.scrollTo(0, 0);
  }, [width]);

  useIsomorphicLayoutEffect(() => {
    function main() {
      if (!width || ctx.current) {
        return;
      }

      assert(!!breakglassRef.current);

      ctx.current = gsap.context(() => {
        console.log('got here');
        gsap
          .timeline({
            scrollTrigger: {
              trigger: '.breaking',
              start: 'top center+=20%',
              end: 'top center',
              scrub: 1,
              markers: true,
              invalidateOnRefresh: true,
            },
          })
          .to('.bglass-left', { xPercent: -100, duration: 0.4, ease: 'sine.in' })
          .to('.bglass-right', { xPercent: 100, duration: 0.4, ease: 'sine.in' }, '<');
        // .to('.breaking', { autoAlpha: 0, ease: 'none' });
        // .fromTo('.services', { autoAlpha: 0, ease: 'none' }, { autoAlpha: 1, ease: 'none' });
      });
    }

    setTimeout(main, 1000);
    return () => {
      ctx.current?.revert();
    };
  }, [width]);

  return (
    <Box paddingBottom="large" ref={container} style={{ border: '10px solid red' }} height="full">
      <AnotherHomePanel className={styles.front}>
        <Box
          width="full"
          maxWidth="large"
          justifyContent="center"
          paddingTop="xxxlarge"
          height="full"
          marginTop="large"
        >
          <Heading level="1" center>
            Are your team struggling to deliver frontend features?
          </Heading>
          <Heading level="2">I can help when....</Heading>
          <List space="large" type="none">
            <Text tone="primary" size="large">
              Your team are more familiar with backend development?
            </Text>
            <Text tone="primary" size="large">
              The launch date is soon, and frontend development is at a standstill.
            </Text>
          </List>
        </Box>
      </AnotherHomePanel>
      <AnotherHomePanel>
        <BreakGlass breakglassRef={breakglassRef} />
      </AnotherHomePanel>
      <AnotherHomePanel className={styles.front}>
        <Heading level="1">One</Heading>
      </AnotherHomePanel>
      <AnotherHomePanel className={styles.front}>
        <Heading level="1">Two</Heading>
      </AnotherHomePanel>
    </Box>
  );
}
