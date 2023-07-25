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
import { MobileContainer } from './MobileContainer';
import { Frameworks } from '../Panels/Frameworks/Frameworks';
import { Clients } from '../Panels/Clients/Clients';
import { Services } from '../Panels/Services/Services';

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
                start: 'top bottom',
                end: 'top top',
                scrub: true,
              },
            })
            .fromTo(el, { opacity: 0 }, { opacity: 1 }, 0);
        });

        for (const [i, section] of sections) {
          const bg = section.querySelector(`.${styles.bg}`);

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
    <Box height="full" ref={panelsContainer}>
      <MobileContainer backgroundImage="https://res.cloudinary.com/ddospxsc8/image/upload/v1690025905/struggle_yderkl.png">
        <FrontPage />
      </MobileContainer>
      <MobileContainer backgroundImage="https://res.cloudinary.com/ddospxsc8/image/upload/v1689953398/frontendsupport/pain_gjcwoh.jpg">
        <Box width="full" height="full" display="flex" justifyContent="center" alignItems="center" flexGrow={1}>
          <Heading level="2">We can help if.....</Heading>
        </Box>
      </MobileContainer>
      <MobileContainer backgroundImage="https://res.cloudinary.com/ddospxsc8/image/upload/v1689953393/frontendsupport/pain_wide_jjmyp6.png">
        <Frameworks />
      </MobileContainer>
      <MobileContainer backgroundImage="https://res.cloudinary.com/ddospxsc8/image/upload/v1690028703/blueskies_mpewpy.png">
        <OSS />
      </MobileContainer>
      <MobileContainer backgroundImage="https://res.cloudinary.com/ddospxsc8/image/upload/v1690028841/dusk_kg7et9.png">
        <Highlights />
      </MobileContainer>
      <MobileContainer backgroundImage="https://res.cloudinary.com/ddospxsc8/image/upload/v1690191864/clients_ipmkwv.png">
        <Clients />
      </MobileContainer>
      <MobileContainer height={{ mobile: 'full', tablet: 'screen' }}>
        <Stack space="medium" align="center">
          <Heading level="1">Services</Heading>
          <Services />
        </Stack>
      </MobileContainer>
    </Box>
  );
}
