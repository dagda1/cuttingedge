import { assert } from '@cutting/assert';
import gsap from 'gsap';

interface LoopConfig {
  paused?: boolean;
  paddingRight?: number | string;
  repeat?: number;
  onChange?(h: HTMLElement, i: number): void;
  speed?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  snap?: any;
}

export function horizontalLoop(items: HTMLElement[], config: LoopConfig): gsap.core.Timeline {
  items = gsap.utils.toArray(items);
  config = config || {};

  const onChange = config.onChange;
  let lastIndex = 0;
  const tl = gsap.timeline({
    onUpdate() {
      const i = tl.closestIndex();
      if (lastIndex !== i) {
        lastIndex = i;
        onChange?.(items[i]!, i);
      }
    },
    paused: config.paused,
    defaults: { ease: 'none' },
    onReverseComplete: () => {
      tl.totalTime(tl.rawTime() + tl.duration() * 100);
    },
  });

  const length = items.length;

  const startX = items[0]!.offsetLeft;

  const times: number[] = [];

  const widths: number[] = [];

  const spaceBefore: number[] = [];

  const xPercents: number[] = [];

  let curIndex = 0;

  let indexIsDirty = false;

  const pixelsPerSecond = (config.speed || 1) * 100;

  const snap = !config.snap ? (v: number) => v : gsap.utils.snap(config.snap || 1); // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural

  const container = items[0]!.parentNode as HTMLElement;

  let totalWidth: number = 0;

  const getTotalWidth = () => {
    const offsetLeft = items[length - 1]!.offsetLeft;
    const xPercent = (xPercents[length - 1]! / 100) * widths[length - 1]!;
    const sb = spaceBefore[0]!;
    const scaleX = items[length - 1]!.offsetWidth * (gsap.getProperty(items[length - 1]!, 'scaleX') as number);
    const paddingRight = parseFloat(config.paddingRight as string) || 0;

    return offsetLeft + xPercent - startX + sb + scaleX + paddingRight;
  };

  const populateWidths = () => {
    assert(!!container);

    let b1 = container.getBoundingClientRect(),
      b2;

    items.forEach((el, i: number) => {
      widths[i] = parseFloat(gsap.getProperty(el, 'width', 'px') as string);

      const x = gsap.getProperty(el, 'x', 'px') as string;
      const xPercent = gsap.getProperty(el, 'xPercent') as number;
      const percentage = (parseFloat(x) / widths[i]!) * 100;

      xPercents[i] = snap(percentage + xPercent);

      b2 = el.getBoundingClientRect();

      spaceBefore[i] = b2.left - (i ? b1.right : b1.left);

      b1 = b2;
    });

    gsap.set(items, {
      // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
      xPercent: (i: number) => xPercents[i]!,
    });
    totalWidth = getTotalWidth();
  };

  let timeWrap: (t: number) => number;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getClosest = (values: number[], value: any, wrap: any) => {
    let i = values.length,
      closest = 1e10,
      index = 0,
      d;
    while (i--) {
      d = Math.abs(values[i]! - value);
      if (d > wrap / 2) {
        d = wrap - d;
      }
      if (d < closest) {
        closest = d;
        index = i;
      }
    }
    return index;
  };

  const populateTimeline = () => {
    let i, item, curX, distanceToStart, distanceToLoop;
    tl.clear();
    for (i = 0; i < length; i++) {
      item = items[i];
      curX = (xPercents[i]! / 100) * widths[i]!;
      distanceToStart = item!.offsetLeft + curX - startX + spaceBefore[0]!;
      distanceToLoop = distanceToStart + widths[i]! * (gsap.getProperty(item!, 'scaleX') as number);
      tl.to(
        item!,
        {
          xPercent: snap(((curX - distanceToLoop) / widths[i]!) * 100),
          duration: distanceToLoop / pixelsPerSecond,
        },
        0,
      )
        .fromTo(
          item!,
          {
            xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]!) * 100),
          },
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
    timeWrap = gsap.utils.wrap(0, tl.duration());
  };

  const refresh = (deep: boolean) => {
    const progress = tl.progress();
    tl.progress(0, true);
    populateWidths();
    if (deep) {
      populateTimeline();
    }
    tl.progress(progress, true);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let proxy: any;

  gsap.set(items, { x: 0 });

  populateWidths();

  assert(isNaN(totalWidth) === false, `totalWidth is NaN`);
  populateTimeline();

  // window.addEventListener('resize', () => refresh(true));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function toIndex(index: number, vars: any) {
    vars = vars || {};
    if (Math.abs(index - curIndex) > length / 2) {
      index += index > curIndex ? -length : length; // always go in the shortest direction
    }

    const newIndex = gsap.utils.wrap(0, length, index);
    let time = times[newIndex];

    if (time! > tl.time() !== index > curIndex && index !== curIndex) {
      // if we're wrapping the timeline's playhead, make the proper adjustments
      time! += tl.duration() * (index > curIndex ? 1 : -1);
    }
    if (time! < 0 || time! > tl.duration()) {
      vars.modifiers = { time: timeWrap };
    }
    curIndex = newIndex;
    vars.overwrite = true;
    gsap.killTweensOf(proxy);
    return vars.duration === 0 ? tl.time(timeWrap(time!)) : tl.tweenTo(time!, vars);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tl.toIndex = (index: number, vars: any) => toIndex(index, vars);
  tl.closestIndex = (setCurrent: unknown) => {
    const index = getClosest(times, tl.time(), tl.duration());
    if (setCurrent) {
      curIndex = index;
      indexIsDirty = false;
    }
    return index;
  };

  tl.current = () => (indexIsDirty ? tl.closestIndex(true) : curIndex);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tl.next = (vars: any) => toIndex(tl.current() + 1, vars);

  tl.previous = (vars: unknown) => toIndex(tl.current() - 1, vars);

  tl.times = times;

  tl.progress(1, true).progress(0, true); // pre-render for performance

  tl.closestIndex(true);

  lastIndex = curIndex;

  tl.refresh = refresh;

  onChange?.(items[curIndex]!, curIndex);

  return tl;
}
