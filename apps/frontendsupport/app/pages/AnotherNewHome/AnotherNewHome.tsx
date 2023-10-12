import { Box, Heading } from '@cutting/component-library';
import { useIsomorphicLayoutEffect } from '@cutting/hooks';
import gsap from 'gsap';
import { AnotherHomePanel } from './AnotherHomePanel';
import { useParentSize } from '@cutting/use-get-parent-size';
import { useRef } from 'react';
import { BreakGlass } from '../Panels/BreakGlass/BreakGlass';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import SplitText from 'gsap/SplitText';
import * as styles from './AnotherHome.css';
import cs from 'classnames';
import { LazyLoadedImage } from '~/components/LazyLoadedImage/LazyLoadedImage';

export function AnotherNewHome(): JSX.Element {
  const container = useRef<HTMLDivElement>(null);
  const { width, height } = useParentSize(container, { debounceDelay: 500 });
  const breakglassRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const ctx = useRef<gsap.Context>();
  const topBubble = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(SplitText);
    window.scrollTo(0, 0);
  }, [width]);

  useIsomorphicLayoutEffect(() => {
    const splitText = new SplitText('.hero-title', {
      type: 'lines words',
      linesClass: 'split-line',
      wordsClass: 'split-char',
    });

    function main() {
      if (!width || ctx.current) {
        return;
      }

      // assert(!!breakglassRef.current);
      // assert(!!imageRef.current);

      // const imageWidth = imageRef.current.getBoundingClientRect().width / 2;
      // console.log(imageWidth);
      console.log(splitText);
      console.log(topBubble);

      ctx.current = gsap.context(() => {
        // assert(!!topBubble.current);

        // gsap.to(window, {
        //   duration: 2,
        //   scrollTo: { y: height, autoKill: false },
        //   ease: 'power3',
        //   onComplete() {},
        // });

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
          );

        // gsap
        //   .timeline({
        //     defaults: {
        //       ease: 'none',
        //     },
        //     scrollTrigger: {
        //       trigger: '.hero',
        //       start: 'top top',
        //       end: 'bottom top+=10%',
        //       pin: true,
        //       scrub: true,
        //     },
        //   })
        //   .to(
        //     '.hero-title',
        //     {
        //     y: '-10%',
        //     duration: 0.8,
        //     ease: 'sine.out',
        //   },
        //   '<',
        // )
        // .fromTo(
        //   '.hero-title .split-char',
        //   {
        //     scaleY: 1,
        //     opacity: 1,
        //   },
        //   {
        //     scaleY: 0,
        //     opacity: 0,
        //     ease: 'sine.in',
        //     transformOrigin: 'top',
        //     stagger: 0.03,
        //     duration: 0.5,
        //   },
        //   '<',
        // )
        // .to(
        //   '.hero-title-rect',
        //   {
        //     height: 0,
        //     duration: 0.8,
        //     ease: 'sine.in',
        //   },
        //   '<',
        // )
        // .to(
        //   '.hero-title-rect .radius-top',
        //   {
        //     scaleY: 0,
        //     transformOrigin: 'top',
        //     duration: 0.095,
        //   },
        //   '<0.25',
        // )
        // .to(
        //   '.hero-title-rect',
        //   {
        //     borderRadius: 0,
        //     duration: 0.15,
        //   },
        //   '<',
        // );

        // const tl = gsap
        //   .timeline({
        //     scrollTrigger: {
        //       trigger: '.breaking',
        //       start: 'top center+=20%',
        //       end: 'top center-=10%',
        //       scrub: true,
        //       markers: true,
        //       invalidateOnRefresh: true,
        //     },
        //   })
        //   .to('.bglass-left', { x: -(width / 8 - imageWidth), duration: 1, ease: 'expoScale(0.5,7,none)' })
        //   .to('.bglass-right', { x: width / 8 - imageWidth, duration: 1, ease: 'expoScale(0.5,7,none)' }, '<')
        //   .to('.breaking', { background: 'transparent' });

        // gsap
        //   .timeline({
        //     scrollTrigger: {
        //       start: (_) => tl.scrollTrigger!.end,
        //       end: 'max',
        //       pin: '.breaking',
        //       pinSpacing: false,
        //       pinReparent: true,
        //       invalidateOnRefresh: true,
        //     },
        //   })
        //   .to('.breaking', { autoAlpha: 0, ease: 'none' });
      });
    }

    setTimeout(main, 1000);
    return () => {
      ctx.current?.revert();
    };
  }, [height, width]);

  return (
    <Box paddingBottom="large" ref={container} height="full">
      {/* <Box display="flex" justifyContent="center" alignItems="center" width="full" height="full">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="fixed"
          flexDirection="column"
          zIndex="none"
        >
          <LazyLoadedImage
            width={229}
            height={225}
            src="https://res.cloudinary.com/ddospxsc8/image/upload/v1696698786/breakglass_pqtyvz.png"
          />
        </Box>
      </Box>
      <Box className={styles.topBubbleWrapper}>
        <Box className={styles.topBubble} ref={topBubble} />
      </Box> */}
      <AnotherHomePanel mode="light" flexDirection="column" paddingTop="xxxlarge" height="full" marginTop="large">
        <Box opacity={0} position="relative" height="maxContent" className="hero">
          <Box marginBottom="large" height="full">
            <div className="hero-title-rect">
              <div className="radius radius-bottom radius-left radius-transform-y"></div>
              <div className="radius radius-top radius-right radius-transform-x"></div>
            </div>
            <Box height="full" display="flex" justifyContent="center" flexDirection="column">
              <Box display="flex" justifyContent="spaceBetween">
                <Box className="hero-image">
                  <LazyLoadedImage
                    layout="constrained"
                    src="https://res.cloudinary.com/ddospxsc8/image/upload/v1691673246/github_wt7a34.png"
                    width={100}
                    height={100}
                  />
                </Box>
                <Box className="hero-image">
                  <LazyLoadedImage
                    layout="constrained"
                    src="https://res.cloudinary.com/ddospxsc8/image/upload/v1691673246/github_wt7a34.png"
                    width={100}
                    height={100}
                  />
                </Box>
                <Box className="hero-image">
                  <LazyLoadedImage
                    layout="constrained"
                    src="https://res.cloudinary.com/ddospxsc8/image/upload/v1691673246/github_wt7a34.png"
                    width={100}
                    height={100}
                  />
                </Box>
              </Box>
              <Box display="flex">
                <Box className="hero-title">Is your Team</Box>
              </Box>
              <Box display="flex">
                <Box className="hero-title">Struggling </Box>
              </Box>
              <Box display="flex">
                <Box className="hero-title">to deliver</Box>
              </Box>
              <Box display="flex">
                <Box className="hero-title">frontend features?</Box>
              </Box>
              <Box display="flex" justifyContent="spaceBetween">
                <Box className="hero-image">
                  <LazyLoadedImage
                    layout="constrained"
                    src="https://res.cloudinary.com/ddospxsc8/image/upload/v1691673246/github_wt7a34.png"
                    width={100}
                    height={100}
                  />
                </Box>
                <Box className="hero-image">
                  <LazyLoadedImage
                    layout="constrained"
                    src="https://res.cloudinary.com/ddospxsc8/image/upload/v1691673246/github_wt7a34.png"
                    width={100}
                    height={100}
                  />
                </Box>
                <Box className="hero-image">
                  <LazyLoadedImage
                    layout="constrained"
                    src="https://res.cloudinary.com/ddospxsc8/image/upload/v1691673246/github_wt7a34.png"
                    width={100}
                    height={100}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          {/* <Box>
            <Heading level="1">I can help when....</Heading>
            <List space="large" type="none">
              <Text tone="primary" size="large">
                Your team are more familiar with backend development?
              </Text>
              <Text tone="primary" size="large">
                The launch date is soon, and frontend development is at a standstill.
              </Text>
            </List>
          </Box> */}
        </Box>
      </AnotherHomePanel>
      <AnotherHomePanel>
        <BreakGlass container={breakglassRef} image={imageRef} />
      </AnotherHomePanel>
      <AnotherHomePanel className={styles.front} mode="dark">
        <Heading level="1">One</Heading>
      </AnotherHomePanel>
      <AnotherHomePanel className={cs('services', styles.front)}>
        <Heading level="1">Two</Heading>
      </AnotherHomePanel>
    </Box>
  );
}
