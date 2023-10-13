import { Box, C2Testimonial, DSTestimonial, Heading, List, Redhatestimonial, Text } from '@cutting/component-library';
import { useIsomorphicLayoutEffect } from '@cutting/hooks';
import gsap from 'gsap';
import { AnotherHomePanel } from './AnotherHomePanel';
import { useParentSize } from '@cutting/use-get-parent-size';
import { useRef } from 'react';
import { BreakGlass } from '../Panels/BreakGlass/BreakGlass';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import SplitText from 'gsap/SplitText';
import * as styles from './AnotherNewHome.css';
import cs from 'classnames';
import { RandomImage } from './RandomImage';
import { Image } from '@unpic/react';
import { LazyLoadedImage } from '~/components/LazyLoadedImage/LazyLoadedImage';
import { assert } from 'assert-ts';
import { Clients } from '~/components/Clients/Clients';
import { horizontalLoop } from '../NewHome/loop';

export function AnotherNewHome(): JSX.Element {
  const container = useRef<HTMLDivElement>(null);
  const { width, height } = useParentSize(container, { debounceDelay: 500 });
  const breakglassRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const ctx = useRef<gsap.Context>();
  const topBubble = useRef<HTMLDivElement>(null);
  const topPane = useRef<HTMLDivElement>(null);
  const arrow = useRef<HTMLImageElement>(null);
  const savedCallback = useRef<any>();
  const id = useRef<NodeJS.Timeout>();

  useIsomorphicLayoutEffect(() => {
    window.scrollTo(0, 0);
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(SplitText);
  }, [width]);

  useIsomorphicLayoutEffect(() => {
    new SplitText('.hero-title', {
      type: 'lines words',
      linesClass: 'split-line',
      wordsClass: 'split-char',
    });

    function main() {
      if (!width || ctx.current) {
        return;
      }

      assert(!!breakglassRef.current);
      assert(!!imageRef.current);
      assert(!!topPane.current);

      const imageWidth = imageRef.current.getBoundingClientRect().width / 2;

      ctx.current = gsap.context(() => {
        gsap.to(window, {
          duration: 2,
          scrollTo: { y: height, autoKill: false },
          ease: 'power3',
        });

        gsap
          .timeline({
            defaults: {
              ease: 'none',
            },
          })
          .to(
            '.hero',
            {
              opacity: 1,
              duration: 0,
            },
            '<',
          )
          .fromTo(
            '.hero-title .split-char',
            {
              scaleY: 0,
              opacity: 0,
            },
            {
              scaleY: 1,
              opacity: 1,
              ease: 'sine.out',
              transformOrigin: 'top',
              stagger: 0.03,
              duration: 0.8,
            },
            '<',
          )
          .fromTo(
            '.hero-img img',
            {
              opacity: 0,
            },
            {
              opacity: 1,
              ease: 'sine.out',
              transformOrigin: 'top',
              duration: 0.8,
            },
            '<0.3',
          );

        gsap
          .timeline({
            defaults: {
              ease: 'none',
            },
            scrollTrigger: {
              trigger: '.hero',
              start: 'top top+=10%',
              end: 'bottom top+=20%',
              pin: true,
              scrub: true,
              markers: true,
            },
          })
          .to(arrow.current, {
            display: 'none',
          })
          .to(
            '.hero-img',
            {
              height: 0,
              duration: 0.8,
            },
            '<',
          )
          .to(
            '.hero-img img',
            {
              y: '-40%',
              duration: 0.8,
            },
            '<',
          )
          .to(
            '.hero-title',
            {
              y: '-10%',
              duration: 0.8,
              ease: 'sine.out',
            },
            '<',
          )
          .to(
            '.hero-title .split-char',
            {
              scaleY: 0,
              opacity: 0,
              ease: 'sine.in',
              transformOrigin: 'top',
              stagger: 0.03,
              duration: 0.5,
            },
            '<',
          );

        const tl = gsap
          .timeline({
            scrollTrigger: {
              trigger: '.breaking',
              start: 'top center+=20%',
              end: 'top center-=10%',
              scrub: true,
              invalidateOnRefresh: true,
            },
          })
          .to('.bglass-left', { x: -(width / 3 - imageWidth), duration: 1, ease: 'expoScale(0.5,7,none)' })
          .to('.bglass-right', { x: width / 3 - imageWidth, duration: 1, ease: 'expoScale(0.5,7,none)' }, '<')
          .to('.breaking', { background: 'transparent' });

        gsap.timeline({
          scrollTrigger: {
            start: (_) => tl.scrollTrigger!.end,
            end: 'max',
            pin: '.breaking',
            pinSpacing: false,
            pinReparent: true,
          },
        });
      });
    }

    setTimeout(main, 1000);
    return () => {
      ctx.current?.revert();
    };
  }, [height, width]);

  useIsomorphicLayoutEffect(() => {
    if (!width) {
      return;
    }

    if (typeof id.current === 'number') {
      savedCallback.current.refresh(true);
      return;
    }

    const boxes = gsap.utils.toArray<HTMLElement>('.box');

    const loop = horizontalLoop(boxes, {
      paused: true,
      paddingRight: 0,
    });

    savedCallback.current = loop;

    function tick() {
      savedCallback.current.next({ duration: 0.4, ease: 'power1.inOut' });
    }

    id.current = setInterval(tick, 2000);
  }, [width]);

  return (
    <Box paddingBottom="large" ref={container} height="full" style={{ marginTop: '-5rem' }}>
      <Box display="flex" justifyContent="center" alignItems="center" width="full" height="full" ref={topPane}>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" zIndex="none">
          <LazyLoadedImage
            width={229}
            height={225}
            src="https://res.cloudinary.com/ddospxsc8/image/upload/v1696698786/breakglass_pqtyvz.png"
          />
        </Box>
      </Box>
      <Box className={styles.topBubbleWrapper}>
        <Box className={styles.topBubble} ref={topBubble} />
      </Box>
      <AnotherHomePanel mode="light" flexDirection="column" paddingTop="xxxlarge" height="full" marginTop="large">
        <Box opacity={0} position="relative" height="maxContent" className="hero">
          <Box marginBottom="large" height="full">
            <Box height="full" display="flex" justifyContent="center" flexDirection="column">
              <Box display="flex" alignItems="center">
                <RandomImage delay={2000} />
                <Box marginLeft="xxxlarge" className="hero-title italic">
                  Frontend
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <Box className="hero-title italic" marginRight="xxxlarge">
                  Rescue
                </Box>
                <RandomImage delay={1500} />
              </Box>
              <Box display="flex" alignItems="center">
                <RandomImage delay={2500} />
                <Box marginLeft="xxxlarge" className="hero-title">
                  Save
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <Box className="hero-title" marginRight="xxxlarge">
                  Your
                </Box>
                <Box className="hero-title" marginRight="xxxlarge">
                  Project
                </Box>
                <Image
                  ref={arrow}
                  src="https://res.cloudinary.com/ddospxsc8/image/upload/v1697207183/arrow_down_mfoxmp.png"
                  layout="constrained"
                  width={109}
                  height={144}
                  alt="arrow down"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </AnotherHomePanel>
      <AnotherHomePanel>
        <BreakGlass container={breakglassRef} image={imageRef} />
      </AnotherHomePanel>
      <AnotherHomePanel className={styles.front} mode="dark">
        <Box zIndex="modal" style={{ background: '#2574F5' }} padding="large">
          <Heading level="1">I can help when....</Heading>
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
      <AnotherHomePanel className={cs('services', styles.front)}>
        <AnotherHomePanel mode="light" flexDirection="column" paddingTop="medium">
          <Box paddingBottom="large">
            <Heading center level="1">
              I have worked with
            </Heading>
          </Box>
          <AnotherHomePanel mode="light" paddingY="medium" maxWidth="large">
            <Clients />
          </AnotherHomePanel>
        </AnotherHomePanel>
      </AnotherHomePanel>
      <AnotherHomePanel mode="light" paddingTop="xxxlarge">
        <Box maxWidth="large">
          <Box display="flex" justifyContent="center" paddingX={{ mobile: 'large' }}>
            <Heading level="1" center tone="secondary" weight="weak">
              Testimonials: The Measure of my Success
            </Heading>
          </Box>
          <Box display="flex" flexDirection={{ mobile: 'column', desktop: 'row' }}>
            <Redhatestimonial />
            <DSTestimonial />
            <C2Testimonial />
          </Box>
        </Box>
      </AnotherHomePanel>
    </Box>
  );
}
