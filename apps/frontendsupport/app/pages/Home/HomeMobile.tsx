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
import { Services } from '../Panels/Services/Services';
import { Scroller } from '~/components/Scroller/Scroller';

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
      if (right < 100 || document.querySelector('.pin-spacer') || ctx.current || innerWidth < 1210) {
        return;
      }

      ctx.current = gsap.context(() => {
        gsap.utils.toArray<HTMLDivElement>('.parallax').forEach((el) => {
          gsap
            .timeline({
              defaults: { ease: 'none' },
              scrollTrigger: {
                trigger: el,
                scrub: true,
              },
            })
            .fromTo(el, { opacity: 0 }, { opacity: 1 }, 0);
        });

        gsap.utils.toArray<HTMLDivElement>('.section').forEach((section, i) => {
          const bg = section.querySelector(`.${styles.bg}`) as HTMLDivElement;

          const height = bg.offsetHeight;

          if (i) {
            bg.style.backgroundPosition = `50% ${height / 2}px`;

            gsap.to(bg, {
              backgroundPosition: `50% ${-(height / 2)}px`,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                scrub: true,
              },
            });
          }
        });
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
      <MobileContainer backgroundImage="https://res.cloudinary.com/ddospxsc8/image/upload/o_50/v1690894100/vr_fmjy7g.png">
        <Box
          width="full"
          height="full"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          flexGrow={1}
        >
          <Heading level="2">We can help if.....</Heading>
          <Box marginY="xxlarge">
            <Scroller />
          </Box>
        </Box>
      </MobileContainer>
      <MobileContainer backgroundImage="https://res.cloudinary.com/ddospxsc8/image/upload/v1690028841/dusk_kg7et9.png">
        <Frameworks />
      </MobileContainer>
      <MobileContainer backgroundImage="https://res.cloudinary.com/ddospxsc8/image/upload/o_20/v1690453264/code_mmdqb8.png">
        <OSS />
      </MobileContainer>
      <MobileContainer backgroundImage="https://res.cloudinary.com/ddospxsc8/image/upload/v1690191864/clients_ipmkwv.png">
        <Highlights />
      </MobileContainer>
      <MobileContainer backgroundImage="https://res.cloudinary.com/ddospxsc8/image/upload/o_20/v1690893685/html_kg05e7.png">
        <Clients />
      </MobileContainer>
      <MobileContainer height={{ mobile: 'auto', desktop: 'screen' }}>
        <Services />
      </MobileContainer>
    </Box>
  );
}
