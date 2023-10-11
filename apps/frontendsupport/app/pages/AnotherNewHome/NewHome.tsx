import { Box, C2Testimonial, DSTestimonial, Heading, List, Redhatestimonial, Text } from '@cutting/component-library';
import { useIsomorphicLayoutEffect } from '@cutting/hooks';
import gsap from 'gsap';
import { About } from '~/components/About/About';
import { LazyLoadedImage } from '~/components/LazyLoadedImage/LazyLoadedImage';
import { Services } from '~/pages/Panels/Services/Services';
import { HomePanel } from './HomePanel';
import { horizontalLoop } from './loop';
import { useParentSize } from '@cutting/use-get-parent-size';
import { useRef } from 'react';
import { BreakGlass } from '../Panels/BreakGlass/BreakGlass';
import { assert } from 'assert-ts';
import ScrollTrigger from 'gsap/ScrollTrigger';

const clients = [
  'https://res.cloudinary.com/ddospxsc8/image/upload/v1696609565/volvo_qhsx69.png',
  'https://res.cloudinary.com/ddospxsc8/image/upload/v1696610104/lloyds_bank_logol_vnortq.png',
  'https://res.cloudinary.com/ddospxsc8/image/upload/v1696680163/apple_whmbee.png',
  'https://res.cloudinary.com/ddospxsc8/image/upload/v1696596781/hp_jlfi7z.png',
  'https://res.cloudinary.com/ddospxsc8/image/upload/v1696691538/redhat_sms6oc.png',
  'https://res.cloudinary.com/ddospxsc8/image/upload/v1696596781/waitrose_qmcwgn.png',
  'https://res.cloudinary.com/ddospxsc8/image/upload/v1696596781/disclosure_efy46i.png',
] as const;

function Divider({ fill }: { fill: '#ffffff' | '#111827' }): JSX.Element {
  return (
    <Box position="relative" style={{ top: '5px' }}>
      <svg viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path style={{ fill }} d="M0 0C0 0 200 50 500 50C800 50 1000 0 1000 0V101H0V1V0Z"></path>
      </svg>
    </Box>
  );
}

export function NewHome(): JSX.Element {
  const container = useRef<HTMLDivElement>(null);
  const savedCallback = useRef<any>();
  const id = useRef<NodeJS.Timeout>();
  const { width, left = 1 } = useParentSize(container, { debounceDelay: 500 });
  const breakglassRef = useRef<HTMLDivElement>(null);
  const ctx = useRef<gsap.Context>();

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    window.scrollTo(0, 0);
  }, [left]);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    window.scrollTo(0, 0);
  }, [left]);

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

  useIsomorphicLayoutEffect(() => {
    return () => {
      if (typeof id.current === 'number') {
        clearInterval(id.current);
      }
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    function main() {
      if (!width || ctx.current) {
        return;
      }

      console.log('got heres');

      assert(!!breakglassRef.current);

      ctx.current = gsap.context(() => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: '.breaking',
              start: 'center bottom',
              end: 'center center',
              scrub: 3,
              markers: true,
            },
          })
          .to('.bglass-right', { xPercent: 300, duration: 0.4, ease: 'sine.in' })
          .to('.bglass-left', { xPercent: -300, duration: 0.4, ease: 'sine.in' }, '<')
          .to('.breaking', { autoAlpha: 0, ease: 'none' });
        // .fromTo('.services', { autoAlpha: 0, ease: 'none' }, { autoAlpha: 1, ease: 'none' });
      });
    }

    setTimeout(main, 1000);
    return () => {
      ctx.current?.revert();
    };
  }, [left, width]);

  return (
    <Box paddingBottom="large">
      <HomePanel innerRef={container}>
        <Box
          width="full"
          display="flex"
          flexDirection={{ mobile: 'column', desktop: 'row' }}
          maxWidth="large"
          justifyContent="center"
          paddingTop="xxxlarge"
          height="full"
          marginTop="large"
        >
          <Box
            display="flex"
            paddingTop={{ mobile: 'medium', desktop: 'xxxlarge' }}
            paddingBottom="xxxlarge"
            width="full"
            paddingX="large"
          >
            <Heading level="1" center>
              Are your team struggling to deliver frontend features?
            </Heading>
          </Box>
          <Box
            display="flex"
            alignItems={{ mobile: 'center', desktop: 'flexStart' }}
            width="full"
            flexDirection="column"
            paddingX={{ mobile: 'large', desktop: 'none' }}
            paddingTop={{ mobile: 'medium', desktop: 'xxxlarge' }}
            paddingBottom={{ mobile: 'medium', desktop: 'xxxlarge' }}
          >
            <Heading level="2">I can help when....</Heading>
            <List space="large">
              <Text tone="primary" size="large">
                Your team are more familiar with backend development?
              </Text>
              <Text tone="primary" size="large">
                The launch date is soon, and frontend development is at a standstill.
              </Text>
            </List>
          </Box>
        </Box>
      </HomePanel>

      <HomePanel>
        <LazyLoadedImage
          width={229}
          height={225}
          src="https://res.cloudinary.com/ddospxsc8/image/upload/v1696698786/breakglass_pqtyvz.png"
        />
      </HomePanel>
      <Divider fill="#ffffff" />
      <HomePanel mode="light" flexDirection="column" paddingTop="medium">
        <Box paddingBottom="large">
          <Heading center level="1">
            I have worked with
          </Heading>
        </Box>
        <HomePanel mode="light" paddingY="medium" maxWidth="large">
          {clients.map((c) => (
            <Box key={c} marginRight="xxxlarge" className="box">
              <LazyLoadedImage layout="constrained" src={c} />
            </Box>
          ))}
        </HomePanel>
      </HomePanel>
      <Box style={{ position: 'relative', top: '5px' }}>
        <svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            style={{ fill: '#ffffff' }}
            d="M321.39 63.56c58 10.79 114.16 30.13 172 41.86 82.39 16.72 168.19 17.73 250.45.39C823.78 89 906.67 48 985.66 27.17c70.05-18.48 146.53-26.09 214.34-3V120H0V92.65a600.21 600.21 0 01321.39-29.09z"
          ></path>
        </svg>
      </Box>
      <HomePanel mode="light" height="full" paddingTop="large">
        <Box paddingY="large" maxWidth="large">
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
      </HomePanel>
      <HomePanel>
        <BreakGlass breakglassRef={breakglassRef} />
      </HomePanel>

      <HomePanel paddingTop="large" className="services">
        <Services />
      </HomePanel>
      <Divider fill="#ffffff" />
      <HomePanel mode="light" paddingBottom="large">
        <About />
      </HomePanel>
    </Box>
  );
}
