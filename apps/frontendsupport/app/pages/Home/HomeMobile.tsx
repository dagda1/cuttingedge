import { useRef } from 'react';
import * as styles from './HomeMobile.css';
import { useParentSize } from '@cutting/use-get-parent-size';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useIsomorphicLayoutEffect } from '@cutting/hooks';
import { Box, Heading, Stack } from '@cutting/component-library';
import { FrontPage } from '~/components/FrontPage/FrontPage';
import { OSS } from '../Panels/OSS/OSS';
import { Highlights } from '../Panels/Highlights/Highlights';

export function HomeMobile(): JSX.Element {
  const panelsContainer = useRef<HTMLDivElement>(null);
  const ctx = useRef<gsap.Context>();
  const { right = 1, width = 1 } = useParentSize(panelsContainer, { debounceDelay: 500 });

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    window.scrollTo(0, 0);
  }, [right]);

  useIsomorphicLayoutEffect(() => {
    function main() {
      if (right < 100 || document.querySelector('.pin-spacer') || ctx.current) {
        return;
      }

      let getRatio = (el: HTMLElement) => window.innerHeight / (window.innerHeight + el.offsetHeight);

      ctx.current = gsap.context(() => {
        const sections = [...gsap.utils.toArray<any>('.section').entries()];

        gsap.utils.toArray<HTMLDivElement>('.parallax').forEach((el) => {
          gsap
            .timeline({
              defaults: { ease: 'none' },
              scrollTrigger: {
                trigger: el,
                start: 'left right',
                end: 'left left',
                scrub: true,
              },
            })
            .fromTo(el, { opacity: 0 }, { opacity: 1 }, 0);
        });

        for (const [i, section] of sections) {
          const bg = section.querySelector(`.${styles.bg}`);

          bg.style.backgroundImage = `url(https://picsum.photos/1600/800?random=${i})`;

          gsap.fromTo(
            bg,
            {
              backgroundPosition: () => (i ? `50% ${-window.innerHeight * getRatio(section)}px` : '50% 0px'),
            },
            {
              backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: () => (i ? 'top bottom' : 'top top'),
                end: 'bottom top',
                scrub: true,
                invalidateOnRefresh: true, // to make it responsive
              },
            },
          );
        }
      });
    }

    setTimeout(main, 1000);
    return () => {
      ctx.current?.revert();
    };
  }, [right, width]);

  return (
    <Box width="full" height="full" ref={panelsContainer}>
      <Box
        component="section"
        className="section"
        position="relative"
        height="screen"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <div className={styles.bg}>
          <FrontPage />
        </div>
      </Box>
      <Box
        component="section"
        className="section"
        position="relative"
        height="screen"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          width="full"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          className={styles.bg}
        >
          <Heading level="2">When you have to get it right first time</Heading>
        </Box>
      </Box>
      <Box
        component="section"
        className="section"
        position="relative"
        height="screen"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          width="full"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          className={styles.bg}
        >
          <Stack space="large">
            <Heading level="2">When you have to get it right first time</Heading>
            <Heading level="2">When your team are more familiar with backend development.</Heading>
            <Heading level="2">When the deadline is looming.</Heading>
            <Heading level="2">When need that killer frontend feature.</Heading>
          </Stack>
        </Box>
      </Box>
      <Box
        component="section"
        className="section"
        position="relative"
        height="screen"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box style={{ border: '10px solid yellow' }} className={styles.bg}>
          <OSS />
        </Box>
      </Box>
      <Box
        component="section"
        className="section"
        position="relative"
        height="screen"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <div className={styles.bg}>
          <Highlights />
        </div>
      </Box>
      <Box
        component="section"
        className="section"
        position="relative"
        height="screen"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <div className={styles.bg}></div>
        <Heading level="1">Nice, right?</Heading>
      </Box>
    </Box>
    // <div ref={panelsContainer} className={styles.panels}>
    //   <Intro />
    //   <HelpPanel innerRef={dimensionsRef} />
    //   {/* <Frameworks />
    //   <OSS />
    //   <Clients />
    //   <Final /> */}
    // </div>
  );
}
