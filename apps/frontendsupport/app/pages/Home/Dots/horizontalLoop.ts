import gsap from 'gsap';

interface Config {
  repeat?: number;
  paused?: boolean;
  speed?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  snap?: any;
  paddingRight?: number | string;
  reversed?: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function horizontalLoop(items: any, config: Config): gsap.core.Timeline {
  items = gsap.utils.toArray(items);
  config = config || {};
  const tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: 'none' },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100) as any,
    }),
    length = items.length,
    startX = items[0].offsetLeft,
    times: number[] = [],
    widths: number[] = [],
    xPercents: number[] = [],
    pixelsPerSecond = (config.speed || 1) * 100;
  let curIndex = 0;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const snap = config.snap === false ? (v: any) => v : gsap.utils.snap(config.snap || 1); // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
  let curX, distanceToStart, distanceToLoop, item, i;

  gsap.set(items, {
    // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
    xPercent: (i, el) => {
      const w = (widths[i] = parseFloat(gsap.getProperty(el, 'width', 'px') as string));
      xPercents[i] = snap(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ((((parseFloat(gsap.getProperty(el, 'x', 'px') as string) / w) * 100) as any) +
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          gsap.getProperty(el, 'xPercent')) as any,
      );
      return xPercents[i];
    },
  });
  gsap.set(items, { x: 0 });
  const totalWidth =
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    items[length - 1].offsetWidth * (gsap.getProperty(items[length - 1], 'scaleX') as any) +
    (parseFloat(config.paddingRight as string) || 0);
  for (i = 0; i < length; i++) {
    item = items[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    distanceToLoop = distanceToStart + widths[i] * (gsap.getProperty(item, 'scaleX') as any);
    tl.to(
      item,
      { xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100), duration: distanceToLoop / pixelsPerSecond },
      0,
    )
      .fromTo(
        item,
        { xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100) },
        {
          xPercent: xPercents[i],
          duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond,
      )
      .add('label' + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }
  function toIndex(index: number, vars: gsap.TweenVars) {
    vars = vars || {};
    if (Math.abs(index - curIndex) > length / 2) {
      index += index > curIndex ? -length : length; // always go in the shortest direction
    }
    const newIndex = gsap.utils.wrap(0, length, index);
    let time = times[newIndex];

    if (time > tl.time() !== index > curIndex) {
      // if we're wrapping the timeline's playhead, make the proper adjustments
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }
  tl.next = (vars: gsap.TweenVars) => toIndex(curIndex + 1, vars);
  tl.previous = (vars: gsap.TweenVars) => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index: number, vars: gsap.TweenVars) => toIndex(index, vars);
  tl.times = times;
  tl.progress(1, true).progress(0, true); // pre-render for performance
  if (config.reversed) {
    tl.vars.onReverseComplete?.();
    tl.reverse();
  }
  return tl;
}
