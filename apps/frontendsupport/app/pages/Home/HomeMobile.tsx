import { useRef } from 'react';
import * as styles from './HomeMobile.css';
import { Intro } from '../Panels/Intro/Intro';
import { HelpPanel } from '../Panels/Help/HelpPanel';
import { useParentSize } from '@cutting/use-get-parent-size';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useIsomorphicLayoutEffect } from '@cutting/hooks';
import assert from 'assert-ts';
import { Box } from '@cutting/component-library';

export function HomeMobile(): JSX.Element {
  const panelsContainer = useRef<HTMLDivElement>(null);
  const dimensionsRef = useRef<HTMLDivElement>(null);
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

        for (const [i, section] of sections) {
          const bg = section.querySelector(`.${styles.bg}`);

          console.log({ bg, s: styles.bg });

          assert(!!bg);

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
    <div ref={panelsContainer}>
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
        <h1 className={styles.heading}>Simple parallax sections</h1>
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
        <h1 className={styles.heading}>Hey look, a title</h1>
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
        <h1 className={styles.heading}>They just keep coming</h1>
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
        <h1 className={styles.heading}>So smooth though</h1>
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
        <h1 className={styles.heading}>Nice, right?</h1>
      </Box>
    </div>
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
