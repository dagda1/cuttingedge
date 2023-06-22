import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { HelpPanel } from '../Panels/Help/HelpPanel';
import { Frameworks } from '../Panels/Frameworks/Frameworks';
import { OSS } from '../Panels/OSS/OSS';
import { Clients } from '../Panels/Clients/Clients';
import { Final } from '../Panels/Final/Final';
import { useIsomorphicLayoutEffect } from '@cutting/hooks';
import { assert } from 'assert-ts';
import cs from 'classnames';
import * as styles from './HomeDesktop.css';
import { BreakGlass } from '../Panels/BreakGlass/BreakGlass';
import { useParentSize } from '@cutting/use-get-parent-size';
import { Intro } from '../Panels/Intro/Intro';
import { breakpoints } from '@cutting/component-library';

export function HomeDesktop(): JSX.Element {
  const dimensionsRef = useRef<HTMLDivElement>(null);
  const panelsContainer = useRef<HTMLDivElement>(null);
  const breakglassRef = useRef<HTMLDivElement>(null);

  const { right = 1, width = 1 } = useParentSize(breakglassRef, { debounceDelay: 500 });

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    window.scrollTo(0, 0);
  }, [right]);

  useIsomorphicLayoutEffect(() => {
    console.log(dimensionsRef.current);
    function main() {
      console.log({ right, desktop: breakpoints.desktop });
      if (right < breakpoints.desktop || document.querySelector('.pin-spacer')) {
        return;
      }

      assert(!!breakglassRef.current);

      const ctx = gsap.context(() => {
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

        gsap.utils.toArray<HTMLDivElement>('.parallax').forEach((text) => {
          gsap
            .timeline({
              defaults: { ease: 'none' },
              scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: text,
                start: 'left right',
                end: 'left left',
                scrub: true,
              },
            })
            .fromTo(text, { x: 250 }, { x: -250 }, 0);
        });

        const tl = gsap
          .timeline({
            scrollTrigger: {
              trigger: '.breaking',
              start: 'top 20%',
              end: 'bottom 80%',
              scrub: 1,
              markers: true,
            },
          })
          .to(breakglassRef.current, { justifyContent: 'space-between', ease: 'none' });

        ScrollTrigger.create({
          start: (_) => tl.scrollTrigger!.end,
          end: 'max',
          pin: '.breaking',
          pinSpacing: false,
          pinReparent: true,
        });
      });
      return () => {
        console.log(ctx);
        return ctx && ctx.revert();
      };
    }

    setTimeout(() => {
      main();
    }, 1000);
  }, [right, width]);

  return (
    <>
      <div ref={panelsContainer} className={cs('panels-container', styles.panels)}>
        <Intro />
        <HelpPanel innerRef={dimensionsRef} />
        <Frameworks />
        <OSS />
        <Clients />
        <Final />
      </div>
      <BreakGlass breakglassRef={breakglassRef} className={styles.breaking} />
    </>
  );
}
