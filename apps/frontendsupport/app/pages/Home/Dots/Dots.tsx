import { Box } from '@cutting/component-library';
import { HomePanel } from '../HomePanel/HomePanel';
import { range } from '@cutting/util';
import { useRef } from 'react';
import { Dot } from './Dot/Dot';
import { useIsomorphicLayoutEffect } from '@cutting/hooks';
import { assert } from 'assert-ts';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const numberOfDots = [...range(9)] as const;

interface DotsProps {
  width?: number;
}

function horizontalLoop(items: HTMLDivElement[]) {
  const length = items.length;
  const startX = items[0].offsetLeft;
  const times: number[] = [];
  const widths: number[] = [];
  const spaceBefore: number[] = [];
  const xPercents: number[] = [];
  const curIndex = 0;
  const indexIsDirty = false;
  const pixelsPerSecond = 100;
  const snap = (v: number) => v;
  const container = items[0].parentNode as HTMLElement;
  let totalWidth: number;

  const getTotalWidth = () =>
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    spaceBefore[0] +
    items[length - 1].offsetWidth * (gsap.getProperty(items[length - 1], 'scaleX') as number);
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

      assert(!!dots.current);

      ctx.current = gsap.context(() => {
        const items = gsap.utils.toArray<HTMLDivElement>('.dot');

        horizontalLoop(items);
      });
    }

    setTimeout(main, 1000);
  }, [width]);

  return (
    <HomePanel overflowX="hidden">
      <Box display="flex" className="dots" ref={dots}>
        {numberOfDots.map((_, i) => (
          <Dot key={i} background={i == 13 ? '#ffffff' : '#1f1f1f'} />
        ))}
      </Box>
    </HomePanel>
  );
}
