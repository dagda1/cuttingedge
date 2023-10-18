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
import { horizontalLoop } from './loop';
import { TopBubble } from './TopBubble/TopBubble';
import { range } from '@cutting/util';
import { Dot } from './Dot/Dot';

const numberOfDots = [...range(20)];

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
  const dots = useRef<HTMLDivElement>(null);

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
      wordsClass: 'split-word',
    });

    new SplitText('.hero-title2', {
      type: 'lines words',
      linesClass: 'split-line',
      wordsClass: 'split-word',
    });

    new SplitText('.hero-title3', {
      type: 'words,chars',
      charsClass: 'char',
      wordsClass: 'word',
    });

    function main() {
      if (!width) {
        return;
      }

      assert(!!breakglassRef.current);
      assert(!!imageRef.current);
      assert(!!topPane.current);
      assert(!!dots.current);

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
            '.hero-title .split-word',
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
            '.hero-title .split-word',
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
          .to('.bglass-right', { x: width / 3 - imageWidth, duration: 1, ease: 'expoScale(0.5,7,none)' }, '<');

        const tl2 = gsap.timeline({
          scrollTrigger: {
            start: (_) => tl.scrollTrigger!.end,
            end: 'max',
            pin: '.breaking',
            pinSpacing: false,
            pinReparent: true,
          },
        });

        gsap
          .timeline({
            scrollTrigger: {
              start: (_) => tl2.scrollTrigger!.end,
              end: 'max',
              pin: '.breaking',
              pinSpacing: false,
              pinReparent: true,
            },
          })
          .to('.breaking', { opacity: 0, ease: 'sine.in' });

        gsap.to(dots.current, {
          x: () => window.innerWidth - dots.current!.clientWidth - 100,
          ease: 'none',
          stagger: 0.5,
          scrollTrigger: {
            trigger: dots.current,
            start: 'top 75%',
            end: 'top 25%',
            scrub: true,
            // markers: true,
          },
        });

        gsap
          .timeline({
            defaults: {
              ease: 'none',
            },
            scrollTrigger: {
              trigger: '.hero2',
              start: 'top 50%',
              end: 'top 25%',
              pin: true,
              scrub: true,
            },
          })
          .to('.hero2', {
            opacity: 1,
          })
          .fromTo(
            '.hero-title2',
            {
              scaleY: 0,
              opacity: 0,
              ease: 'sine.in',
              transformOrigin: 'top',
              stagger: 0.03,
              duration: 0.5,
            },
            {
              opacity: 1,
              y: '-10%',
              scaleY: 1,
              duration: 0.8,
              ease: 'sine.out',
            },
            '<',
          );

        gsap
          .timeline({
            defaults: {
              ease: 'none',
            },
            scrollTrigger: {
              trigger: '.hero3',
              start: 'top 50%',
              end: 'top 25%',
              pin: true,
              scrub: true,
            },
          })
          .to('.hero3', {
            opacity: 1,
          })
          .fromTo(
            '.hero-title3 .char',
            {
              scaleY: 0,
              opacity: 0,
              ease: 'sine.in',
              transformOrigin: 'top',
              stagger: 0.03,
              duration: 0.5,
            },
            {
              opacity: 1,
              y: '-10%',
              scaleY: 1,
              duration: 0.8,
              ease: 'sine.out',
            },
            '<',
          );
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
    <Box
      paddingBottom={{ mobile: 'large', desktop: 'none' }}
      ref={container}
      height="full"
      style={{ marginTop: '-5rem' }}
    >
      <Box display="flex" justifyContent="center" alignItems="center" width="full" height="full" ref={topPane}>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" zIndex="none">
          <LazyLoadedImage
            width={229}
            height={225}
            src="https://res.cloudinary.com/ddospxsc8/image/upload/v1696698786/breakglass_pqtyvz.png"
          />
        </Box>
      </Box>
      <TopBubble innerRef={topBubble} mode={'light'} />
      <AnotherHomePanel
        mode="light"
        flexDirection="column"
        justifyContent={{ mobile: 'flexStart', desktop: 'center' }}
        paddingTop="xxxlarge"
        height="full"
        marginTop="large"
      >
        <Box opacity={0} position="relative" height="maxContent" className="hero">
          <Box marginBottom="large" height="full">
            <Box height="full" display="flex" justifyContent="center" flexDirection="column">
              <Box display="flex" justifyContent="flexEnd">
                <RandomImage display="mobile" delay={2000} />
              </Box>
              <Box display="flex" alignItems="center">
                <RandomImage delay={2000} display="desktop" />
                <Box
                  marginLeft={{ mobile: 'medium', desktop: 'xxxlarge' }}
                  marginRight={{ mobile: 'xxxlarge', desktop: 'none' }}
                  marginBottom={{ mobile: 'medium', desktop: 'none' }}
                  marginTop={{ mobile: 'medium', desktop: 'none' }}
                  className="hero-title italic"
                >
                  Frontend
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <Box
                  className="hero-title italic"
                  marginRight={{ mobile: 'none', desktop: 'xxxlarge' }}
                  paddingBottom={{ mobile: 'medium', desktop: 'none' }}
                >
                  Rescue
                </Box>
                <RandomImage delay={1500} display="desktop" />
              </Box>
              <Box display="flex" alignItems="center" paddingBottom={{ mobile: 'medium', desktop: 'none' }}>
                <RandomImage delay={2500} display="desktop" />
                <Box marginLeft="xxxlarge" className="hero-title">
                  Save
                </Box>
              </Box>
              <Box display="flex" alignItems="center" paddingBottom={{ mobile: 'medium', desktop: 'none' }}>
                <Box className="hero-title" marginRight={{ mobile: 'medium', desktop: 'xxxlarge' }}>
                  Your
                </Box>
                <Box className="hero-title" marginRight={{ mobile: 'none', desktop: 'xxxlarge' }}>
                  Project
                </Box>
                <Box display={{ mobile: 'none', desktop: 'block' }}>
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
              <Box display="flex" justifyContent="flexEnd">
                <RandomImage display="mobile" delay={1500} />
              </Box>
              <Box display={{ mobile: 'flex', desktop: 'none' }} justifyContent="spaceBetween">
                <RandomImage display="mobile" delay={2500} />
                <Box style={{ alignSelf: 'flex-end' }}>
                  <Image
                    ref={arrow}
                    src="https://res.cloudinary.com/ddospxsc8/image/upload/v1697207183/arrow_down_mfoxmp.png"
                    layout="constrained"
                    width={28}
                    height={37}
                    alt="arrow down"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </AnotherHomePanel>
      <AnotherHomePanel>
        <BreakGlass container={breakglassRef} image={imageRef} />
      </AnotherHomePanel>
      {[...range(2)].map((_, i) => (
        <Box key={i}>
          <Heading level="1">{i}</Heading>
        </Box>
      ))}
      <AnotherHomePanel mode="dark" className="hero2" opacity={0}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          zIndex="modal"
          width="full"
          height="maxContent"
        >
          <Box>
            <Box className="hero-title2" marginLeft={{ mobile: 'large' }}>
              I can
            </Box>
            <Box className="hero-title2">help</Box>
            <Box className="hero-title2">when....</Box>
          </Box>
        </Box>
      </AnotherHomePanel>
      <AnotherHomePanel overflowX="hidden">
        <Box display="flex" className="dots" ref={dots}>
          {numberOfDots.map((_, i) => (
            <Dot key={i} background={i == 13 ? '#ffffff' : '#1f1f1f'} />
          ))}
        </Box>
      </AnotherHomePanel>
      <AnotherHomePanel className="hero3" opacity={0}>
        <Box maxWidth="large">
          <List space="xxxlarge" type="none">
            <Text tone="primary" size="large" className="hero-title3">
              Your team are more familiar with backend development?
            </Text>
            <Text tone="primary" size="large" className="hero-title3">
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
