import { Box, Heading } from '@cutting/component-library';
import { useIsomorphicLayoutEffect } from '@cutting/hooks';
import gsap from 'gsap';
import { useParentSize } from '@cutting/use-get-parent-size';
import { useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import SplitText from 'gsap/SplitText';
import * as styles from './Home.css';
import { HomePanel } from './HomePanel/HomePanel';
import cs from 'classnames';
import { Clients } from '~/components/Clients/Clients';

export function Home2(): JSX.Element {
  const container = useRef<HTMLDivElement>(null);
  const { width, height } = useParentSize(container, { debounceDelay: 500 });
  const ctx = useRef<gsap.Context>();

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
      <HomePanel className={cs('services', styles.front)} marginY="xxxlarge">
        <HomePanel mode="light" flexDirection="column" paddingTop="medium">
          <Box paddingBottom="large">
            <Heading center level="1">
              I have worked with
            </Heading>
          </Box>
          <HomePanel mode="light" paddingBottom="medium" maxWidth="large" marginTop="xxxlarge">
            <Clients width={width} />
          </HomePanel>
        </HomePanel>
      </HomePanel>
    </Box>
  );
}
