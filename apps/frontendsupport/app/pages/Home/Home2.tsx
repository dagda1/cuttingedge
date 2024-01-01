import { Box } from '@cutting/component-library';
import { useIsomorphicLayoutEffect } from '@cutting/hooks';
import gsap from 'gsap';
import { useParentSize } from '@cutting/use-get-parent-size';
import { useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import SplitText from 'gsap/SplitText';
import { TopBubble } from './TopBubble/TopBubble';
import { Dots } from './Dots/Dots';
import * as styles from './Home.css';
import { HomePanel } from './HomePanel/HomePanel';

export function Home2(): JSX.Element {
  const container = useRef<HTMLDivElement>(null);
  const { width, height } = useParentSize(container, { debounceDelay: 500 });
  const ctx = useRef<gsap.Context>();
  const topBubble = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    window.scrollTo(0, 0);
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(SplitText);
  }, [width]);

  useIsomorphicLayoutEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function main() {
      if (!width) {
        return;
      }

      ctx.current = gsap.context(() => {});
    }

    setTimeout(main, 1000);
    return () => {
      ctx.current?.revert();
    };
  }, [height, width]);

  return (
    <Box paddingBottom="large" ref={container} height="full">
      <TopBubble innerRef={topBubble} mode="light" />
      <HomePanel
        mode="light"
        flexDirection="column"
        justifyContent="center"
        height="screen"
        width="full"
        className={styles.responsive}
      >
        <Box>One</Box>
      </HomePanel>
      <Box marginTop="xxxlarge">
        <Dots width={width} />
      </Box>
      <HomePanel
        mode="light"
        flexDirection="column"
        justifyContent="center"
        height="screen"
        width="full"
        className={styles.responsive}
      >
        <Box>One</Box>
      </HomePanel>
    </Box>
  );
}
