import { Box } from '@cutting/component-library';
import { HomePanel } from '../HomePanel/HomePanel.js';
import { range } from '@cutting/util';
import { useRef } from 'react';
import { Dot } from './Dot/Dot.js';
import { useIsomorphicLayoutEffect } from '@cutting/hooks';
import { assert } from 'assert-ts';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const numberOfDots = [...range(9)] as const;

interface DotsProps {
  width?: number;
}

function buildSeamlessLoop(
  items: HTMLDivElement[],
  spacing: number,
  animate: (el: HTMLDivElement) => gsap.core.Timeline,
) {
  const rawSequence = gsap.timeline({ paused: true }); // this is where all the real animations live

  const seamlessLoop = gsap.timeline({
    // this merely scrubs the playhead of the sequence so that it appears to seamlessly loop
    paused: true,
    repeat: -1,
    // onRepeat(this: gsap.core.Timeline) {
    //   // works around a super rare edge case bug that's fixed GSAP 3.6.1
    //   this._time === this._dur && (this._tTime += this._dur - 0.01);
    // },
    onReverseComplete(this: gsap.core.Timeline) {
      this.totalTime(this.rawTime() + this.duration() * 100); // seamless looping backwards
    },
  });
  const cycleDuration = spacing * items.length;
  let dur: number | undefined = undefined;

  // loop through 3 times so we have just one animateFunc() (we'll populate it in the .forEach() below...
  items
    .concat(items)
    .concat(items)
    .forEach((_, i) => {
      const element = items[i % items.length];

      assert(!!element, `no element in seamless loop at ${i % items.length}`);

      let anim = animate(element);

      rawSequence.add(anim, i * spacing);

      dur || (dur = anim.duration());
    });

  // animate the playhead linearly from the start of the 2nd cycle to tis end (so we'll have one "extra" cycle at the beginning and end)
  seamlessLoop.fromTo(
    rawSequence,
    {
      time: cycleDuration + (dur as unknown as number) / 2,
    },
    {
      time: '+=' + cycleDuration,
      duration: cycleDuration,
      ease: 'none',
    },
  );

  return seamlessLoop;
}

export function Dots({ width }: DotsProps): JSX.Element {
  const dots = useRef<HTMLDivElement>(null);
  const ctx = useRef<gsap.Context>();

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useIsomorphicLayoutEffect(() => {
    function main() {
      if (!width) {
        return;
      }

      let iteration = 0;

      assert(!!dots.current);

      ctx.current = gsap.context(() => {
        const items = gsap.utils.toArray<HTMLDivElement>('.dot');

        gsap.set('.dot', { xPercent: 400, opacity: 0, scale: 0 });

        const spacing = 0.1;
        const snapTime = gsap.utils.snap(spacing);

        const animate = (element: HTMLDivElement) => {
          const tl = gsap.timeline();
          tl.fromTo(
            element,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, zIndex: 100, duration: 0.5, repeat: 1, ease: 'power1.in', immediateRender: false },
          ).fromTo(
            element,
            { xPercent: 400 },
            { xPercent: -400, duration: 1, ease: 'none', immediateRender: false },
            0,
          );

          return tl;
        };

        const seamlessLoop = buildSeamlessLoop(items, spacing, animate);
        const playhead = { offset: 0 }; // a proxy object we use to simulate the playhead position, but ican go infinitely in either direction and we'll just use an onUpdate to convert it to the corresponding time on the seamlessLoop timeline
        const wrapTime = gsap.utils.wrap(0, seamlessLoop.duration()); // feed in any offset (time) and it'll return the corresponding wrapped time (a safe value between 0 and the seamlessLoop's duration)
        const scrub = gsap.to(playhead, {
          offset: 0,
          onUpdate() {
            seamlessLoop.time(wrapTime(playhead.offset)); // convert the offset to a "safe" corresponding time on the seamlessLoop timeline
          },
          duration: 0.5,
          ease: 'power3',
          paused: true,
        });

        const wrap = (iterationDelta: number, scrollTo: number) => {
          iteration += iterationDelta;
          trigger.scroll(scrollTo);
          trigger.update(); // by default, when we trigger.scroll(), it waits 1 tick to update().
        };

        const trigger = ScrollTrigger.create({
          start: 0,
          onUpdate(self: ScrollTrigger) {
            let scroll = self.scroll();
            if (scroll > self.end - 1) {
              // wrap(1, 2);
            } else if (scroll < 1 && self.direction < 0) {
              // wrap(-1, self.end - 2);
            } else {
              scrub.vars.offset = (iteration + self.progress) * seamlessLoop.duration();
              scrub.invalidate().restart(); //
            }
          },
          markers: true,
          // pin: '.dots',
        });

        // converts a progress value (0-1, but could go outside those bounds when wrapping) into a "safe" scroll value that's at least 1 away from the start or end because we reserve those for sensing when the user scrolls ALL the way up or down, to wrap.
        function progressToScroll(progress: number) {
          return gsap.utils.clamp(1, trigger.end - 1, gsap.utils.wrap(0, 1, progress) * trigger.end);
        }

        // feed in an offset (like a time on the seamlessLoop timeline, but it can exceed 0 and duration() in either direction; it'll wrap) and it'll set the scroll position accordingly. That'll call the onUpdate() on the trigger if there's a change.
        function scrollToOffset(offset: number) {
          // moves the scroll playhead to the place that corresponds to the totalTime value of the seamlessLoop, and wraps if necessary.
          const snappedTime = snapTime(offset);
          const progress = (snappedTime - seamlessLoop.duration() * iteration) / seamlessLoop.duration();
          const scroll = progressToScroll(progress);
          if (progress >= 1 || progress < 0) {
            return wrap(Math.floor(progress), scroll);
          }
          trigger.scroll(scroll);
        }

        ScrollTrigger.addEventListener('scrollEnd', () => scrollToOffset(scrub.vars.offset));
      });
    }

    setTimeout(main, 1000);
  }, [width]);

  return (
    <HomePanel overflowX="hidden">
      <Box className="dots" ref={dots} style={{ border: '10px solid red' }} overflow="hidden">
        <Box position="relative" display="flex">
          {numberOfDots.map((_, i) => (
            <Dot key={i} background={i == 5 ? '#ffffff' : '#1f1f1f'} />
          ))}
        </Box>
      </Box>
    </HomePanel>
  );
}
