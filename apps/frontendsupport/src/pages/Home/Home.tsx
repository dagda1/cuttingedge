import './Home.css';

import { assert } from '@cutting/assert';
import { Box, C2Testimonial, DSTestimonial, Heading, List, Redhatestimonial, Text } from '@cutting/component-library';
import { useIsomorphicLayoutEffect } from '@cutting/hooks';
import { useParentSize } from '@cutting/use-get-parent-size';
import { Image } from '@unpic/react';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';
import { useRef } from 'react';

import { About } from '../../components/About/About';
import { Clients } from '../../components/Clients/Clients';
import { BreakGlass } from '../Panels/BreakGlass/BreakGlass';
import { Services } from '../Panels/Services/Services';
import { Panel } from './Panel/Panel';

export function Home(): JSX.Element {
  const container = useRef<HTMLDivElement>(null);
  const { width, height } = useParentSize(container, { debounceDelay: 500 });
  const breakglassRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const ctx = useRef<gsap.Context | undefined>(undefined);
  const arrow = useRef<HTMLImageElement>(null);

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

    function main() {
      if (!width || width < 100) {
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
            start: () => tl.scrollTrigger!.end,
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
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: '.testimonials',
            start: 'center 25%', // the default values
            end: 'bottom top',
            scrub: true,
          },
        });
        gsap.to(testimonials[1], {
          yPercent: 50,
          ease: 'none',
          scrollTrigger: {
            trigger: '.testimonials',
            // start: "top bottom", // the default values
            // end: "bottom top",
            scrub: true,
          },
        });
        gsap.to(testimonials[2], {
          yPercent: 75,
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

  return (
    <Box paddingBottom="xxxlarge">
      <Panel
        mode="dark"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="screen"
        width="full"
        innerRef={container}
        marginBottom="xxxlarge"
      >
        <Box opacity={0} position="relative" height="maxContent" className="hero">
          <Box marginBottom="large" height="full">
            <Box height="full" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginRight={{ desktop: 'large' }}
                marginBottom="small"
              >
                <Box className="hero-title italic">Need Quality React</Box>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="center" marginY="small">
                <Box display="flex" className="hero-title italic" component="span">
                  Frontend Code?
                </Box>
              </Box>
              <Box
                width="full"
                display="flex"
                alignItems="center"
                marginY="small"
                justifyContent={{ mobile: 'center', desktop: 'spaceAround' }}
              >
                <Box className="hero-title">I Deliver</Box>
              </Box>
              <Box className="hero-title" marginY="small">
                <Box component="span">Fast</Box>
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
      </Panel>
      <Panel mode="dark" paddingY="xxxlarge" marginTop="xxxlarge">
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
            <Redhatestimonial />
            <DSTestimonial />
            <C2Testimonial />
          </Box>
        </Box>
      </Panel>
      <Panel marginTop="xxxlarge">
        <BreakGlass container={breakglassRef} image={imageRef} />
      </Panel>
      <Panel mode="dark" className="hero2" opacity={1}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="full"
          height="maxContent"
        >
          <Box>
            <Box className="hero-title2">I can</Box>
            <Box className="hero-title2">help</Box>
            <Box className="hero-title2">when....</Box>
          </Box>
        </Box>
      </Panel>
      <Panel className="hero3" opacity={0} marginBottom="xxxlarge">
        <Box maxWidth="medium">
          <List space="xxxlarge" type="none">
            <Text tone="primary" size="large" className="hero-title3">
              You need production-ready React fast
            </Text>
            <Text tone="primary" size="large" className="hero-title3">
              The frontend is blocking launch
            </Text>
          </List>
        </Box>
      </Panel>
      <Clients />
      <Panel>
        <Services />
      </Panel>
      <Panel>
        <About />
      </Panel>
    </Box>
  );
}
