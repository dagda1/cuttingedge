import { useRef } from 'react';
import * as styles from './HomeMobile.css';
import { useParentSize } from '@cutting/use-get-parent-size';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useIsomorphicLayoutEffect } from '@cutting/hooks';
import { Box, Heading } from '@cutting/component-library';
import { FrontPage } from '~/components/FrontPage/FrontPage';
import { OSS } from '../Panels/OSS/OSS';
import { Highlights } from '../Panels/Highlights/Highlights';
import { MobileContainer } from './MobileContainer';
import { Frameworks } from '../Panels/Frameworks/Frameworks';
import { Clients } from '../Panels/Clients/Clients';

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
      <MobileContainer>
        <FrontPage />
      </MobileContainer>
      <MobileContainer>
        <Box width="full" height="full" display="flex" justifyContent="center" alignItems="center" flexGrow={1}>
          <Heading level="2">We can help if.....</Heading>
        </Box>
      </MobileContainer>
      <MobileContainer>
        <Frameworks />
      </MobileContainer>
      <MobileContainer>
        <OSS />
      </MobileContainer>
      <MobileContainer>
        <Highlights />
      </MobileContainer>
      <MobileContainer>
        <Clients />
      </MobileContainer>
      <MobileContainer>
        <Box height="full" width="full" display="flex" justifyContent="center" alignItems="center" paddingX="medium">
          <Heading level="2">We live and breathe frontend development</Heading>
        </Box>
      </MobileContainer>
    </Box>
  );
}
