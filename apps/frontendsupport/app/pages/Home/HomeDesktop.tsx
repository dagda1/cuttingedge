import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { HelpPanel } from '../Panels/Help/HelpPanel';
import { Clients } from '../Panels/Clients/Clients';
import { Final } from '../Panels/Final/Final';
import { useIsomorphicLayoutEffect } from '@cutting/hooks';
import { assert } from '@cutting/assert';
import { BreakGlass } from '../Panels/BreakGlass/BreakGlass';
import { useParentSize } from '@cutting/use-get-parent-size';
import { Intro } from '../Panels/Intro/Intro';
import { Box, breakpoints } from '@cutting/component-library';
import { Frameworks } from '../Panels/Frameworks/Frameworks';
import { OSS } from '../Panels/OSS/OSS';
import { useNavigate } from '@remix-run/react';

console.log({ ScrollTrigger });

export function HomeDesktop(): JSX.Element {
  const dimensionsRef = useRef<HTMLDivElement>(null);
  const panelsContainer = useRef<HTMLDivElement>(null);
  const breakglassRef = useRef<HTMLDivElement>(null);
  const ctx = useRef<gsap.Context>();
  const navigate = useNavigate();
  const imageRef = useRef<HTMLImageElement>(null);

  const { right = 1, width = 1 } = useParentSize(breakglassRef, { debounceDelay: 500 });

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    window.scrollTo(0, 0);
  }, [right]);

  useIsomorphicLayoutEffect(() => {
    function main() {
      if (right < breakpoints.desktop || document.querySelector('.pin-spacer') || ctx.current) {
        return;
      }

      assert(!!breakglassRef.current);

      ctx.current = gsap.context(() => {
        assert(!!panelsContainer.current);

        let scrollTween = gsap.to(panelsContainer.current, {
          x: () => -(panelsContainer.current!.scrollWidth - window.innerWidth),
          ease: 'none',
          scrollTrigger: {
            trigger: panelsContainer.current,
            invalidateOnRefresh: true,
            pin: true,
            scrub: 1,
            end: () => '+=' + panelsContainer.current!.scrollWidth,
          },
        });

        ScrollTrigger.create({
          trigger: '.final',
          containerAnimation: scrollTween,
          start: 'center 65%',
          end: 'center 51%',
          id: '4',
        });

        gsap.utils.toArray<HTMLDivElement>('.parallax').forEach((el) => {
          gsap
            .timeline({
              defaults: { ease: 'none' },
              scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el,
                start: 'left right',
                end: 'left left',
                scrub: true,
              },
            })
            .fromTo(el, { x: 250 }, { x: -250 }, 0);
        });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: '.breaking',
              start: 'center 65%',
              end: 'center 51%',
              scrub: 1,
              markers: true,
            },
          })
          .to(breakglassRef.current, { justifyContent: 'space-between', ease: 'none' })
          .to('.glass', { autoAlpha: 0, ease: 'none' })
          .eventCallback('onComplete', () => {
            navigate('/services/home');
          });
      });
    }

    setTimeout(main, 1000);
    return () => {
      ctx.current?.revert();
    };
  }, [navigate, right, width]);

  return (
    <>
      <Box
        display={{ mobile: 'none', desktop: 'flex' }}
        flexWrap="nowrap"
        flexDirection="row"
        ref={panelsContainer}
        overscrollBehavior="none"
        className={'panels-container'}
      >
        <Intro />
        <HelpPanel innerRef={dimensionsRef} />
        <Frameworks />
        <OSS />
        <Clients />
        <Final />
      </Box>
      <BreakGlass container={breakglassRef} image={imageRef} />
    </>
  );
}
