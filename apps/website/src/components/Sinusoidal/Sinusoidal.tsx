import 'rc-slider/assets/index.css';

import { assert } from '@cutting/assert';
import { Box, Button, Label, RadioGroup } from '@cutting/component-library';
import type { Point } from '@cutting/svg';
import { Group, ResponsiveSVG } from '@cutting/svg';
import { useParentSize } from '@cutting/use-get-parent-size';
import { SVGMathJax } from '@cutting/use-mathjax';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { curveNatural } from '@visx/curve';
import { LinePath } from '@visx/shape';
import Slider from 'rc-slider';
import { useCallback, useMemo, useRef, useState } from 'react';

import { ApplicationLayout } from '~/layouts/ApplicationLayout';

import { getScales } from './get-scales';
import * as styles from './Sinusoidal.css';

type TrigFunctions = 'sin' | 'cos';

const xTickValues = [-6.28, -4.71, -3.14, -1.57, 0, 1.57, 3.14, 4.71, 6.28];
const piMap = {
  [xTickValues[0]]: '$-2\\pi$',
  [xTickValues[1]]: '$-\\frac{3\\pi}2$',
  [xTickValues[2]]: '$-\\pi$',
  [xTickValues[3]]: '$-\\frac{\\pi}2$',
  [xTickValues[4]]: '',
  [xTickValues[5]]: '$\\frac{\\pi}2$',
  [xTickValues[6]]: '$\\pi$',
  [xTickValues[7]]: '$\\frac{3\\pi}2$',
  [xTickValues[8]]: '$2\\pi$',
};

export function TrigonometricTransforms(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width, height } = useParentSize(containerRef, { initialValues: { width: 0, height: 0 } });
  assert(typeof width === 'number');
  assert(typeof height === 'number');
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const [trigFunction, setTrigFunction] = useState<TrigFunctions>('sin');

  const reset = useCallback(() => {
    setA(1);
    setB(1);
    setC(0);
    setD(0);
  }, []);

  const { xScale, yScale, sineData } = useMemo(
    () => getScales({ a, b, c, d, trigFunction, width, height }),
    [a, b, c, d, trigFunction, width, height],
  );

  return (
    <ApplicationLayout
      centerHeading
      heading={`y=${[0, 1].includes(a) ? '' : a}${trigFunction}(${[0, 1].includes(b) ? '' : b}x${[0].includes(c) ? '' : c > 0 ? `-${c}` : `+${Math.abs(c)}`})${[0].includes(d) ? '' : d > 0 ? `+${d}` : `${d}`}`}
      showFooter={false}
    >
      <Box component="section" ref={containerRef} position="relative" padding="small">
        <Box position="absolute" width={{ mobile: '1/3', desktop: '1/8' }}>
          <Box marginBottom="xxsmall" display={{ mobile: 'block', desktop: 'flex' }}>
            <RadioGroup<TrigFunctions>
              legend="Trigonometric Function"
              legendMode="screen-reader-only"
              name="theme"
              checkableLayout="inline"
              checkableSize={'large'}
              onChange={(o) => {
                setTrigFunction(o.target.value as TrigFunctions);
              }}
              options={[
                {
                  value: 'sin',
                  content: 'SIN',
                  checked: trigFunction === 'sin',
                },
                {
                  value: 'cos',
                  content: 'COS',
                  checked: trigFunction === 'cos',
                },
              ]}
            />
            <Button type="button" onClick={() => reset()} className={styles.button}>
              RESET
            </Button>
          </Box>
          <Box marginBottom="xsmall">
            <Label>Amplitude = {a}</Label>
            <Slider min={-3} max={3} value={a} onChange={(n) => setA(n as number)} />
          </Box>
          <Box marginBottom="small">
            <Label>Frequency = {b}</Label>
            <Slider min={-6} max={6} value={b} onChange={(n) => setB(n as number)} />
          </Box>
          <Box marginTop="small" marginBottom="small">
            <Label>Phase-shift = {c}</Label>
            <Slider min={-10} max={10} value={c} onChange={(n) => setC(n as number)} />
          </Box>
          <Box marginBottom="small">
            <Label>Vertical shift = {d}</Label>
            <Slider min={-3} max={3} value={d} onChange={(n) => setD(n as number)} />
          </Box>
        </Box>
        <ResponsiveSVG width={width} height={height}>
          <Group transform={`translate(0, ${yScale(0)})`}>
            <AxisBottom
              scale={xScale}
              stroke="#ffffff"
              tickStroke="#ffffff"
              hideZero
              tickValues={xTickValues}
              tickFormat={(d) => Number(d).toPrecision(3)}
              tickComponent={({ x, y, formattedValue }) => (
                <Group x={x - 9} y={y - 5}>
                  <SVGMathJax>{piMap[String(formattedValue) as unknown as keyof typeof piMap]}</SVGMathJax>
                </Group>
              )}
            />
          </Group>
          <Group transform={`translate(${xScale(0)}, 0)`}>
            <AxisLeft
              scale={yScale}
              stroke="#ffffff"
              tickStroke="#ffffff"
              hideZero
              tickValues={[-3, -2, -1, 0, 1, 2, 3]}
              tickFormat={(d) => String(Math.round(Number(d)))}
              tickComponent={(props) => (
                <Group transform={`translate(${props.x - 10}, ${props.y - 10})`}>
                  <SVGMathJax>{props.formattedValue}</SVGMathJax>
                </Group>
              )}
            />
          </Group>
          <Group>
            <LinePath<Point>
              x={(d) => xScale(d.x) ?? 0}
              y={(d) => yScale(d.y) ?? 0}
              strokeWidth={1}
              curve={curveNatural}
              data={sineData}
              className={styles.sine}
            />
          </Group>
        </ResponsiveSVG>
      </Box>
    </ApplicationLayout>
  );
}

export default TrigonometricTransforms;
