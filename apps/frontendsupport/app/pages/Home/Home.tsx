import { Box, C2Testimonial, DSTestimonial, Heading, List, Redhatestimonial, Text } from '@cutting/component-library';
import { useIsomorphicLayoutEffect } from '@cutting/hooks';
import gsap from 'gsap';
import { HomePanel } from './HomePanel/HomePanel';
import { useParentSize } from '@cutting/use-get-parent-size';
import { useRef } from 'react';
import { BreakGlass } from '../Panels/BreakGlass/BreakGlass';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import SplitText from 'gsap/SplitText';
import * as styles from './Home.css';
import cs from 'classnames';
import { assert } from 'assert-ts';
import { Clients } from '../../components/Clients/Clients';
import { horizontalLoop } from './loop';
import { TopBubble } from './TopBubble/TopBubble';
import { Services } from '../Panels/Services/Services';
import { About } from '../../components/About/About';
import { Dots } from './Dots/Dots';
import { RandomImage } from '~/components/RandomImage/RandomImage';
import { Image } from '@unpic/react';

export function Home(): JSX.Element {
  const container = useRef<HTMLDivElement>(null);
  const { width, height } = useParentSize(container, { debounceDelay: 500 });
  const breakglassRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const ctx = useRef<gsap.Context>();
  const topBubble = useRef<HTMLDivElement>(null);
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
    if (!width) {
      return;
    }

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

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function main() {
      if (!width) {
        return;
      }

      assert(!!breakglassRef.current);
      assert(!!imageRef.current);

      const imageWidth = imageRef.current.getBoundingClientRect().width / 2;

      ctx.current = gsap.context(() => {
        gsap
          .timeline({
            defaults: {
              ease: 'none',
            },
          })
          .fromTo(
            '.top-nav',
            {
              opacity: 0,
              scaleY: 0,
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
              duration: 1,
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
          .to(
            '.hero-img',
            {
              opacity: 0,
              duration: 3,
            },
            '<',
          )
          .to(
            '.hero-img img',
            {
              y: '-140%',
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
          .fromTo(
            '.hero-title .split-word',
            {
              scaleY: 1,
              opacity: 1,
            },
            {
              scaleY: 0,
              opacity: 0,
              ease: 'sine.in',
              transformOrigin: 'top',
              stagger: 0.03,
              duration: 1,
            },
            '<',
          )
          .fromTo(
            arrow.current,
            {
              opacity: 1,
            },
            {
              opacity: 0,
            },
          );

        const tl = gsap
          .timeline({
            scrollTrigger: {
              trigger: '.breaking',
              start: 'top 50%',
              end: 'max',
              scrub: true,
              invalidateOnRefresh: true,
            },
          })
          .to('.bglass-left', { x: -width, duration: 1 })
          .to('.bglass-right', { x: width - imageWidth, duration: 1 }, '<');

        gsap.timeline({
          scrollTrigger: {
            start: (_) => tl.scrollTrigger!.end,
            end: 'max',
            pin: '.breaking',
            pinSpacing: false,
            pinReparent: true,
            scrub: true,
          },
        });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: '.hero2',
              scrub: true,
            },
          })
          .fromTo('.breaking', { opacity: 1, scaleY: 1 }, { scaleY: 0, opacity: 0, duration: 1 });

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

        const testimonials = document.querySelectorAll<HTMLDivElement>('.testimonial');

        gsap.to(testimonials[0], {
          yPercent: 50,
          ease: 'none',
          scrollTrigger: {
            trigger: 'testimonials',
            start: 'center 25%', // the default values
            end: 'bottom top',
            scrub: true,
          },
        });
        gsap.to(testimonials[1], {
          yPercent: 5,
          ease: 'none',
          scrollTrigger: {
            trigger: '.testimonials',
            // start: "top bottom", // the default values
            // end: "bottom top",
            scrub: true,
          },
        });
        gsap.to(testimonials[2], {
          yPercent: 70,
          ease: 'none',
          scrollTrigger: {
            trigger: '.testimonials',
            // start: "top bottom", // the default values
            // end: "bottom top",
            scrub: true,
          },
        });
      });
    }

    main();
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
    id.current = setInterval(tick, 1000);
  }, [width]);

  return (
    <Box paddingBottom="xxxlarge">
      <TopBubble innerRef={topBubble} mode="light" />
      <HomePanel
        mode="dark"
        flexDirection="column"
        justifyContent="center"
        height="screen"
        width="full"
        innerRef={container}
      >
        <Box opacity={0} position="relative" height="maxContent" className="hero">
          <Box marginBottom="large" height="full">
            <Box height="full" display="flex" justifyContent="center" flexDirection="column">
              <Box display={{ mobile: 'flex', desktop: 'none' }} width="full" justifyContent="center" marginTop="large">
                <RandomImage display="flex" justifyContent="center" imageSet={1} mode="mobile" delay={3000} />
              </Box>
              <Box
                display="flex"
                justifyContent={{ mobile: 'flexStart', tablet: 'flexStart' }}
                alignItems="center"
                marginRight={{ desktop: 'large' }}
                marginTop={{ mobile: 'small', desktop: 'xxlarge' }}
                marginBottom="small"
              >
                <RandomImage imageSet={1} mode="desktop" delay={2000} />
                <Box
                  marginLeft={{ mobile: 'medium', desktop: 'medium' }}
                  marginRight={{ mobile: 'medium', desktop: 'xxlarge' }}
                  className="hero-title italic"
                >
                  Is your team
                </Box>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="center" marginY="small">
                <Box display="flex" className="hero-title italic" component="span">
                  struggling
                </Box>
              </Box>
              <Box
                width="full"
                display="flex"
                alignItems="center"
                marginY="small"
                justifyContent={{ mobile: 'center', desktop: 'spaceAround' }}
              >
                <Box className="hero-title">To Deliver</Box>
                <RandomImage imageSet={2} mode="desktop" delay={2500} />
              </Box>
              <Box display={{ mobile: 'none', desktop: 'block' }} className="hero-title" marginY="small">
                <Box component="span">Frontend Features?</Box>
              </Box>
              <Box display={{ mobile: 'block', desktop: 'none' }} justifyContent="center" width="full">
                <Box display="flex" justifyContent="center" className="hero-title" marginY="small">
                  Frontend
                </Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  className="hero-title"
                  marginTop="medium"
                  marginBottom="xlarge"
                >
                  Features?
                </Box>
              </Box>
              <Box display={{ mobile: 'flex', desktop: 'none' }} width="full" justifyContent="center">
                <RandomImage display="flex" justifyContent="center" imageSet={2} mode="mobile" delay={3000} />
              </Box>

              <Box display="flex" justifyContent="center" marginBottom={{ mobile: 'none', desktop: 'large' }}>
                <Image
                  ref={arrow}
                  src="https://res.cloudinary.com/ddospxsc8/image/upload/v1704211494/arrow_down_white_nmuhnn.png"
                  layout="constrained"
                  width={28}
                  height={37}
                  alt="arrow down"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </HomePanel>
      <HomePanel mode="dark" paddingY="xxxlarge">
        <Box maxWidth="large">
          <Box display="flex" justifyContent="center" paddingX={{ mobile: 'large' }}>
            <Heading level="1" center tone="secondary" weight="weak">
              Testimonials: The Measure of my Success
            </Heading>
          </Box>
          <Box
            display="flex"
            flexDirection={{ mobile: 'column', desktop: 'row' }}
            className="testimonials"
            marginBottom="xxxlarge"
          >
            <DSTestimonial />
            <Redhatestimonial />
            <C2Testimonial />
          </Box>
        </Box>
      </HomePanel>
      <HomePanel>
        <BreakGlass container={breakglassRef} image={imageRef} />
      </HomePanel>
      <HomePanel mode="dark" className="hero2" opacity={1}>
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
            <Box className="hero-title2">I can</Box>
            <Box className="hero-title2">help</Box>
            <Box className="hero-title2">when....</Box>
          </Box>
        </Box>
      </HomePanel>
      <Box marginTop="xxxlarge">
        <Dots width={width} />
      </Box>
      <HomePanel className="hero3" opacity={0}>
        <Box maxWidth="medium">
          <List space="xxxlarge" type="none">
            <Text tone="primary" size="large" className="hero-title3">
              Your team are more familiar with backend development.
            </Text>
            <Text tone="primary" size="large" className="hero-title3">
              The launch date is soon, and frontend development is at a standstill.
            </Text>
          </List>
        </Box>
      </HomePanel>
      <HomePanel className={cs('services', styles.front)}>
        <HomePanel mode="light" flexDirection="column" paddingTop="medium">
          <Box paddingBottom="large">
            <Heading center level="1">
              I have worked with
            </Heading>
          </Box>
          <HomePanel mode="light" paddingBottom="medium" maxWidth="large">
            <Clients />
          </HomePanel>
        </HomePanel>
      </HomePanel>
      <HomePanel>
        <Services />
      </HomePanel>
      <HomePanel>
        <About />
      </HomePanel>
    </Box>
  );
}
